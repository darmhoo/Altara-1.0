<?php

namespace App\Events;

use App\NewOrder;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class RepaymentEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $newOrder;

    /**
     * Create a new event instance.
     *
     * @param $newOrder
     */
    public function __construct(NewOrder $newOrder)
    {
        $this->newOrder = $newOrder;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
