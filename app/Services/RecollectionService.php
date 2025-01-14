<?php

namespace App\Services;

use App\NewOrder;
use App\OrderType;
use Carbon\Carbon;
use App\Recollection;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Repositories\RecollectionRepository;

class RecollectionService
{
    private $recollectRepository;
    private $rawQueryNotCompletedPayment;

    public function __construct(RecollectionRepository $recollectionRepository)
    {
        $this->recollectRepository = $recollectionRepository;
        $this->rawQueryNotCompletedPayment =  DB::raw("EXISTS(SELECT COUNT(*) AS totalRepayment, SUM(IF(amortizations.actual_payment_date IS NOT NULL, 1 , 0)) as noOfRePaymentMade from amortizations WHERE new_orders.id = amortizations.new_order_id GROUP BY amortizations.new_order_id HAVING(totalRepayment-noOfRePaymentMade) > 0)");
    }

    public function categoriseRecollection()
    {
        Recollection::truncate();
        $minDate = Carbon::now()->format('Y-m-d');
        NewOrder::whereHas('amortization', function ($query) use ($minDate) {
            $query->whereDate('expected_payment_date', '<', $minDate)
                ->where('actual_amount', '<', 1);
        })->chunk(100, function ($order) {
            foreach ($order as $data) {
                $expectedPaymentDate = $data->amortization->where('expected_payment_date', '<', now()->endOfDay())->where('actual_amount', '<', 1)->first()->expected_payment_date ?? null;
                if ($expectedPaymentDate) {
                    $todaysDate = Carbon::now();
                    $days = Carbon::parse($expectedPaymentDate)->diffInDays($todaysDate);
                    $bizType = Str::contains($data->businessType->slug, ['cash_loan']);

                    $range = $bizType ? range(1, 15) : range(1, 30);
                    if (in_array($days, $range)) {
                        $this->storeOrUpdateRecollection($data, NewOrder::REM, $days);
                    }
                    $range = $bizType ? range(16, 30) : range(31, 45);
                    if (in_array($days, $range)) {
                        $this->storeOrUpdateRecollection($data, NewOrder::CRDBUR, $days);
                    }
                    $range = $bizType ? range(31, 45) : range(46, 75);
                    if (in_array($days, $range)) {
                        $this->storeOrUpdateRecollection($data, NewOrder::INTREPO, $days);
                    }
                    $range = $bizType ? 45 : 75;
                    if ($days > $range) {
                        $this->storeOrUpdateRecollection($data, NewOrder::EXTREPO, $days);
                    }
                } else {
                    continue;
                }
            }
        });
        return true;
    }

    private function storeOrUpdateRecollection($data, $status, $days)
    {
        $this->recollectRepository->updateOrCreate(
            new Recollection(),
            [
                'new_order_id' => $data->id,
            ],
            [
                'status' => $status,
                'number_of_days' => $days,
                'expected_amount' => $data->amortization[0]['expected_amount']
            ]
        );
    }

    public function generateStats($newOrders): array
    {
        $cashAndCarryId = OrderType::where('name', 'Cash n Carry')->first()->id;
        $newOrders = $newOrders->whereHas('branch', function ($query) {
            $query->where('name', '!=', 'Ikoyi')->where('name', '!=', 'Challenge Warehouse')->where('name', '!=', 'Micro Alakia');
        })->where('order_type_id', '!=', $cashAndCarryId);
        $additional['total_sales'] =  $newOrders->count();
        $additional['amountReceived'] = $this->getAmountReceived(clone $newOrders) + $newOrders->sum('down_payment');
        $additional['amountOwed'] = $this->getAmountOwed(clone $newOrders);
        $additional['totalOutstanding'] = $this->getTotalOutstanding(clone $newOrders);
        $active = $this->getCountActiveOrders(clone $newOrders);
        $complete = $this->getCountCompletedOrders(clone $newOrders);
        $inactive =   $additional['total_sales'] - ($active + $complete);
        $additional['ordersStatusCount'] = [
            'active' => $active,
            'inactive' => $inactive,
            'complete' => $complete
        ];
        $additional['overdueRange'] = [
            '1_30' => $this->getOverDueStatsForRange(clone $newOrders, [1, 30]),
            '31_45' => $this->getOverDueStatsForRange(clone $newOrders, [31, 45]),
            '45_above' => $this->getOverDueStatsGreaterThan45Days(clone $newOrders)
        ];
        return $additional;
    }

    private function getTotalAmountOwed($totalAmountOwedPerRecollectionStage)
    {
        return $totalAmountOwedPerRecollectionStage->reduce(function ($initialValue, $data) {
            return $initialValue + $data['amount_owed'];
        });
    }

    private function getTotalAmountOwedPerRecollectionStage($newOrders)
    {
        return $newOrders
            ->leftJoin('recollections', 'new_orders.id', '=', 'recollections.new_order_id')
            ->selectRaw('count(*) as total, SUM(expected_amount) as owed, number_of_days, status')
            ->groupBy('recollections.status')
            ->get()->map(function ($item) {
                return [
                    'total' => $item->total,
                    'amount_owed' => $item->owed,
                    'status' => $item->status
                ];
            });
    }

    private function getOverDueStatsForRange($newOrders, array $range = [])
    {
        return $newOrders->whereHas('recollection', function ($query) use ($range) {
            $query->whereBetween('number_of_days', $range);
        })->count();
    }

    private function getOverDueStatsGreaterThan45Days($newOrders)
    {
        return $newOrders->whereHas('recollection', function ($query) {
            $query->where('number_of_days', '>', 45);
        })->count();
    }

    private function getCountActiveOrders($orderQuery)
    {

        return $orderQuery->whereRaw($this->rawQueryNotCompletedPayment)->whereHas('amortization', function ($query) {
            $query->whereDate('actual_payment_date', '>=', Carbon::now()->subMonths(2))->orWhereDate('new_orders.order_date', '>=', Carbon::now()->subMonths(2));
        })->count();
    }

    private function getCountInactiveOrders($orderQuery)
    {
    }

    private function getCountCompletedOrders($orderQuery)
    {

        $rawQuery = DB::raw("EXISTS(SELECT COUNT(*) AS totalRepayment, SUM(IF(amortizations.actual_payment_date IS NOT NULL, 1 , 0)) as noOfRePaymentMade from amortizations WHERE new_orders.id = amortizations.new_order_id GROUP BY amortizations.new_order_id HAVING(totalRepayment-noOfRePaymentMade) <= 0)");
        return $orderQuery->whereRaw($rawQuery)->count();
    }

    private function getAmountReceived($orderQuery)
    {
        return $orderQuery->join('amortizations', 'new_orders.id', '=', 'amortizations.new_order_id')
            ->where('actual_payment_date', '<>', null)->where('actual_amount', '>', 1)
            ->sum('actual_amount');
    }

    private function getAmountOwed($orderQuery)
    {
        return $orderQuery->join('amortizations', 'new_orders.id', '=', 'amortizations.new_order_id')
            ->where('actual_payment_date', null)->where('actual_amount', '<', 1)
            ->whereDate('expected_payment_date', '<', Carbon::now()->endOfDay())
            ->sum('expected_amount');
    }
    private function getTotalOutstanding($orderQuery)
    {
        return $orderQuery->join('amortizations', 'new_orders.id', '=', 'amortizations.new_order_id')
            ->where('actual_payment_date', null)->where('actual_amount', '<', 1)
            ->sum('expected_amount');
    }

    public function generateCollectionListCSV($orders)
    {
        return $orders->get()->map(function ($item) {
            $saleType = $item->salesCategory->name ?? null;
            $payment_made_query = $item->amortization->where('actual_payment_date', '<>', null)->where('actual_amount', '<>', null);
            $payment_due_query = $item->amortization->where('actual_payment_date', null)->where('actual_amount', null);
            $no_of_payments_made = $payment_made_query->count();
            $no_of_payments_due = $payment_due_query->count();
            $sum_of_payments_made = $payment_made_query->sum('expected_amount') + $item->down_payment;
            $sum_of_payments_due = $payment_due_query->sum('expected_amount');
            return [
                'full_name' => $item->customer->full_name ?? 'Not Available',
                'phone_number' => $item->customer->telephone ?? 'Not Available',
                'email' => $item->customer->email ?? 'Not Available',
                'order_number' => $item->order_number,
                'sale_type' => $saleType ?? 'Not Available',
                'new_sale' => $saleType == "new sales" ? "Yes" : "No",
                'business_type' => $item->businessType->name,
                'product_type' => $item->product->product_type ?? 'Not Available',
                'showroom' => $item->branch->name,
                'down_payment' => $item->down_payment,
                'date_purchased' => $item->order_date,
                'number_of_payments_made' => $no_of_payments_made,
                'amount_of_payments_made' => $sum_of_payments_made,
                'number_of_payments_due' => $no_of_payments_due,
                'amount_of_payment_due' => $sum_of_payments_due,
            ];
        });
    }
}
