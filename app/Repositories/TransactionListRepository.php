<?php

namespace App\Repositories;

use App\TransactionList;
use Illuminate\Http\Request;

class TransactionListRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return TransactionList::class;
    }

    public function getAll($filter)
    {
        return $this->model::filter($filter)->paginate();
    }

    public function update($model, $data) {
        $model->update($data);
        if(request()->has('comment')){
            $model->comment()->updateOrCreate(['comment' => request('comment')]);
        }
        return $model;
    }
}
