<?php

namespace App\Listeners;

use App\Customer;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\Notifications\RepaymentNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RepaymentListener
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $customer = Customer::find($event->newOrder['customer_id']);
        try {
            $customer->notify(new RepaymentNotification($event->newOrder));
        }catch (\Exception $e) {
            LogHelper::error(strtr(Constants::REPAYMENT_NOTIFICATION_ERROR, $event->newOrder->toArray()), $e);
        }
    }
}