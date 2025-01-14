<?php

namespace App\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use App\Exceptions\AException;
use Carbon\Carbon;

class UpdateAmortizationListener
{
    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     * @throws AException
     */
    public function handle($event)
    {
        //update amortization

        try {

            if ($event->amortization != null) {
                $amortization = $event->amortization;
            } else {
                $amortization = $event->newOrder->amortization()->where('actual_payment_date', null)->first();
            }
            if ($amortization) {
                $amortization->update([
                    'actual_payment_date' => Carbon::now(),
                    'actual_amount' => $amortization->actual_amount + $event->newOrder['amount'],
                    'user_id' => $event->newOrder['is_dd'] ? 1 : auth('api')->user()->id
                ]);
            }
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
