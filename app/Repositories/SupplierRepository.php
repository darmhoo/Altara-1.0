<?php


namespace App\Repositories;



use App\Supplier;

class SupplierRepository extends Repository
{


    public function model()
    {
        return Supplier::class;
    }
}
