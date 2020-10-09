<?php

namespace App\Repositories;

use App\Payment;
use App\Events\RepaymentEvent;

class PaymentRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Payment::class;
    }

    public function getAll($filter)
    {
        return $this->model::orderBy('created_at', 'desc')->filter($filter)->paginate();
    }

    public function store(array $data)
    {
        // dd($data);
        $result = $this->model::create($data);

        //I haven't figured out another way to fix this
        if ($data["payment_type_id"] == 2) {
            event(new RepaymentEvent($data));
        }
        return $result;
    }

    public function update($model, $data) {
        $model->update($data);
        $model->paymentReconcile->total = 0;

        $model->paymentReconcile->update();

        if(request()->has('comment')){
            $model->comment()->updateOrCreate(['commentable_id' => $model->id],['comment' => request('comment'), 'user_id' => auth()->user()->id]);
        }
        return $model;
    }
}
