<?php


namespace App\Repositories;


use App\LateFee;

class LateFeeRepository extends Repository
{

    public function model()
    {
        return LateFee::class;
    }

    public function getLateFees($filter)
    {
        return $this->model::filter($filter)->get();
    }
}
