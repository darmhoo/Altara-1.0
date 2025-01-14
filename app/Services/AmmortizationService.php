<?php

namespace App\Services;

use App\DownPaymentRate;
use App\Exceptions\AException;
use App\Helper\Helper;
use App\NewOrder;
use App\PriceCalculator;
use App\RepaymentCycle;
use App\RepaymentDuration;
use App\StoreProduct;
use Illuminate\Support\Str;

/**
 *
 * @author Adeniyi
 */
class AmmortizationService
{
    public function generatePreview($data)
    {
        $order = new NewOrder($data);
        try {
            $plan = app()->make('App\Amortization\\' .Str::studly($order->repaymentCycle->name), ['order' => $order])->preview();
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
        return $plan;
    }

    public function recommend($data){
        // * Get all necessary parameters
       $salary = (int) $data['salary'];
       $total_price = (int) $data['total_price'];
       $initial_plan = (int) $data['plan_id'];
       $duration_id = (int) $data['duration'];
       $duration = RepaymentDuration::where('id', $duration_id)->first();
       $cycle_id = (int) $data['cycle'];
       $cycle =RepaymentCycle::where('id', $cycle_id)->first();


        $downpayments = DownPaymentRate::all()->toArray();

        usort($downpayments, function($a, $b){
            return strcmp($a['percent'], $b['percent']);
        }); //* sort by percent value

        $key=array_search($initial_plan, array_column(json_decode(json_encode($downpayments),TRUE), 'id'));  //* get starting point for plan loop
        $ans = '';
        for( $i = $key; $i < count($downpayments); $i++){
            $data = [
                "repayment_dur" => $duration->value,
                "repayment_cycle" => $cycle->value,
                "percent" => $downpayments[$i]['percent'],
                "plus" => $downpayments[$i]['plus']
            ];


            $calculator_data = Helper::calculator($total_price,(object)$data);

            if($this->getAllowance($salary) >= $calculator_data['onetime'])
            {
                $ans = [$downpayments[$i]['percent'],
                         $downpayments[$i]['plus']
                        ];

                return $ans;
            }
            else{
                $ans = "There is no suitable plan";
            }

        }

        return $ans;

    }

    public function recommendInformal($data){
        //* Get all relevant parameters
        $initial_plan = (int) $data['plan_id'];
        $duration_id = (int) $data['duration'];
        $duration = RepaymentDuration::where('id', $duration_id)->first();
        $cycle_id = (int) $data['cycle'];
        $cycle =RepaymentCycle::where('id', $cycle_id)->first();
       $total_price = (int) $data['total_price'];
       $months = [$data['month1'], $data['month2'], $data['month3']];
       $customer_type = $data['customer_type'];

       $downpayments = DownPaymentRate::all()->toArray();

       usort($downpayments, function($a, $b){
           return strcmp($a['percent'], $b['percent']);
       }); //* sort by percent value

       $key=array_search($initial_plan, array_column(json_decode(json_encode($downpayments),TRUE), 'id'));  //* get starting point for plan loop
       $ans = '';

        //* Do credibility check
        for($i = $key ; $i < count($downpayments) ; $i++){

            $data = [
                "repayment_dur" => $duration->value,
                "repayment_cycle" => $cycle->value,
                "percent" => $downpayments[$i]['percent'],
                "plus" => $downpayments[$i]['plus']
            ];

            $calculator_data = Helper::calculator($total_price,(object)$data);
            $cred_month = 0;
            for( $index = 0; $index < count($months) ; $index++ ){
                if($this->confirmMonth($months[$index], $calculator_data['onetime'], $customer_type, $index) == false){
                    break;
                }else{
                    $cred_month++;
                }

            }
            if($cred_month == 3){
                $ans = [$downpayments[$i]['percent'],
                $downpayments[$i]['plus']
               ];
                return $ans;
            }
            else{
               $ans = "There is no suitable plan";
            }
        }
        return $ans;

    }

    public function getAllowance($salary){
        return (float)$salary / 4;
    }

    public function confirmMonth($balances, $repayment, $customer_type, $index){
        $affirm = 0;
        foreach($balances as $balance){
            if($balance > $repayment){
                $affirm++;
            }

        }
        return ( $index !== 0 && $customer_type == 'new_customer') ? $affirm >= 2 : $affirm >= 1;
    }


}

