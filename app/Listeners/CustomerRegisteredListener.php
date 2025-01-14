<?php

namespace App\Listeners;

use App\ContactCustomer;
use App\CustomerStage;
use App\Events\CustomerStageUpdatedEvent;
use App\Repositories\ContactCustomerRepository;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CustomerRegisteredListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public $contactRepo;
    public function __construct(ContactCustomerRepository $contactRepository)
    {
        $this->contactRepo = $contactRepository;
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $customer_contact = ContactCustomer::where('reg_id', $event->reg_id)->first();
        $contact_customer = $this->contactRepo->update($customer_contact, ['customer_stage_id' => CustomerStage::where('name', CustomerStage::REGISTERED)->first()->id]);
        if ($contact_customer->wasChanged('customer_stage_id')) {
            event(new CustomerStageUpdatedEvent($customer_contact->refresh()));
        }
    }
}
