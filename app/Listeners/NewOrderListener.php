<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Exceptions\AException;
use App\Helper\Constants;
use App\Helper\LogHelper;
use App\NewOrder;
use App\Notifications\NewOrderNotification;
use App\OrderStatus;
use Illuminate\Support\Str;

class NewOrderListener
{
    /**
     * Handle the event.
     *
     * @param NewOrderEvent $event
     * @return void
     * @throws AException
     */
    public function handle(NewOrderEvent $event)
    {

        $order = $event->order;
        try {
            if ($order->repayment < 1 && $order->businessType->slug == 'ap_cash_n_carry') {
                NewOrder::query()->where('id', $event->order->id)->update(
                    [
                        'status_id' => OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id,
                    ]
                );
                // $order->update([
                //     'status_id' => OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id,
                // ]);
                // $order->status_id =  OrderStatus::where('name', OrderStatus::COMPLETED)->first()->id;
                // $order->save();
                return;
            }
            $p = app()->make('App\Amortization\\' . Str::studly($event->order->repaymentCycle->name), ['order' => $event->order])->create();
            try {
                $event->order->customer->notify(new NewOrderNotification($event->order));
            } catch (\Exception $e) {
                //Implement a Logger service to log this error
                LogHelper::error(strtr(Constants::ORDER_NOTIFICATION_ERROR, $event->order->toArray()), $e);
            }
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
    }
}
