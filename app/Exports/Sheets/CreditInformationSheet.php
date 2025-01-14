<?php

namespace App\Exports\Sheets;

use Generator;
use App\NewOrder;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithLimit;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromGenerator;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithProperties;
use Maatwebsite\Excel\Concerns\WithCustomChunkSize;

class CreditInformationSheet implements FromGenerator, WithHeadings, WithMapping, WithTitle, ShouldAutoSize, WithLimit, WithCustomChunkSize
{

    private $orders;
    public function __construct($orders)
    {
        $this->orders = $orders;
    }
    public function title(): string
    {
        return 'Credit Information';
    }
    // public function query()
    // {
    //     // dd($this->orders->count());
    //     return $this->orders;
    // }
    public function generator(): Generator
    {
        // 
        return $this->orders->cursor();
    }

    public function map($order): array
    {
        //   dd($order);
        $lastNonePaymentDate = null;
        $lastPaymentDate = null;
        $days_in_arrears = '0';
        if ($order->latestAmortizationPayed) {
            $lastPaymentDate  = $order->latestAmortizationPayed->actual_payment_date;
        }
        if ($order->latestAmortizationNotPayed) {
            // dd($order->latestAmortizationNotPayed);
            $lastNonePaymentDate = $order->latestAmortizationNotPayed->expected_payment_date;
        }

        if ($lastNonePaymentDate && $lastPaymentDate) {
            $days_in_arrears = Carbon::parse($lastNonePaymentDate)->diffInDays(Carbon::parse($lastPaymentDate));
        }

        $outStandingBalance = $this->outstandingBalance(clone $order) ?? '0';
        $accountStatus = $this->openOrClosed(clone $order);
        $accountStatusDate = $this->accountStatusDate($accountStatus, $order);
        $overDueAmount =  $this->overdueAmount(clone $order) ?? '0';
        $repaymentFrequencyName =  $this->repaymentCycleName($order->repaymentCycle->name);
        $loanClassification =  $this->loanClassification($days_in_arrears);
        $maturityDate = $order->amortization[$order->amortization->count() - 1]->expected_payment_date;

        return [
            $order->customer->id, // 'Customer ID',
            $order->id, // 'Account Number',
            $accountStatus, // 'Account Status',
            $accountStatusDate, // 'Account status date',
            $order->order_date, // 'Date of loan (facility) disbursement/Loan effective date',
            $order->product_price,   // 'Credit limit/Facility amount/Global limit',
            $order->product_price, // 'Loan (Facility) Amount/Availed Limit',
            $outStandingBalance,  // 'Outstanding balance',
            $order->amortization[0]->expected_amount,    // 'Instalment amount',
            'NGN',  // 'Currency',
            $days_in_arrears ?? '0', // 'Days in arrears',
            $overDueAmount, // 'Overdue amount',
            'personal', // 'Loan (Facility) type',
            $order->repaymentDuration->value, // 'Loan (Facility) Tenor',
            $repaymentFrequencyName,   // 'Repayment frequency',
            $order->latestAmortizationPayed->actual_payment_date ?? '',   // 'Last payment date',
            $order->latestAmortizationPayed->actual_amount ?? '', // 'Last payment amount',
            $maturityDate, // 'Maturity date',
            $loanClassification, // 'Loan Classification', //ASK cat 1
            $order->customer->civil_status, // 'Marital Status',
            'N/A', // 'Spouse\'s Name',
            'N/A', // 'Legal Challenge Status ',
            'N/A', // 'Litigation Date',
            'N/A', // 'Consent Status',
            'N/A', // 'Loan Security Status',
            NULL,   // 'Collateral Type',
            NULL,   // 'Collateral Details',
            NULL,   // 'Previous Account number',
            NULL,   // 'Previous Name',
            NULL,   // 'Previous Customer ID',
            NULL,   // 'Previous Branch code'
        ];
    }

    public function headings(): array
    {
        return [
            'Customer ID',
            'Account Number',
            'Account Status',
            'Account status date',
            'Date of loan (facility) disbursement/Loan effective date',
            'Credit limit/Facility amount/Global limit',
            'Loan (Facility) Amount/Availed Limit',
            'Outstanding balance',
            'Instalment amount',
            'Currency',
            'Days in arrears',
            'Overdue amount',
            'Loan (Facility) type',
            'Loan (Facility) Tenor',
            'Repayment frequency',
            'Last payment date',
            'Last payment amount',
            'Maturity date',
            'Loan Classification',
            'Marital Status',
            'Spouse\'s Name',
            'Legal Challenge Status ',
            'Litigation Date',
            'Consent Status',
            'Loan Security Status',
            'Collateral Type',
            'Collateral Details',
            'Previous Account number',
            'Previous Name',
            'Previous Customer ID',
            'Previous Branch code'
        ];
    }


    private function outstandingBalance($order)
    {
        $sum = $order->amortization->where('actual_payment_date',  null)->where('actual_amount', '<', 1)->sum('expected_amount');
        return  $sum > 0 ? $sum : '0';
    }
    private function overdueAmount($order)
    {
        $sum =  $order->amortization->where('expected_payment_date', '<', Carbon::now()->endOfDay())
            ->where('actual_payment_date',  null)
            ->where('actual_amount', '<', 1)->sum('expected_amount');
        return $sum > 0 ? $sum : '0';
    }

    public function openOrClosed($order)
    {
        $sumOfRepaymentMade = (clone $order)->amortization->where('actual_payment_date', '<>', null)->where('actual_amount', '>', 1)->sum('actual_amount');

        $expectedSumOfPayment = $order->amortization->sum('expected_amount');

        $amountLeftToBePayed =  $expectedSumOfPayment - $sumOfRepaymentMade;
        if ($amountLeftToBePayed > 0) {
            return 'Open';
        } elseif ($amountLeftToBePayed == 0) {
            return 'Closed';
        } else {
            return 'Closed';
        }
    }

    public function accountStatusDate($status, $order)
    {
        $date = null;
        if ($status == 'Closed' && $order->latestAmortizationPayed) {
            $date =  $order->latestAmortizationPayed->actual_payment_date;
        }
        if ($status == 'Open' &&  $order->latestAmortizationNotPayed) {
            $date = $order->latestAmortizationNotPayed->expected_payment_date;
        }
        return $date;
    }



    public function loanClassification($days)
    {
        if (in_array($days, range(0, 30))) {
            return 'Performing';
        }
        if (in_array($days, range(31, 60))) {
            return 'Substandard';
        }
        if (in_array($days, range(61, 90))) {
            // dd($days);
            return 'Doubtful';
        }
        return 'Lost';
    }
    public function repaymentCycleName($name)
    {
        if ($name == 'bi_monthly') {
            return 'Forthnightly';
        }
        if ($name == 'monthly' || $name = 'custom') {
            return 'Monthly';
        }
        return 'N/A';
    }
    public function limit(): int
    {
        return 500;
    }

    public function chunkSize(): int
    {
        return 500;
    }
}
