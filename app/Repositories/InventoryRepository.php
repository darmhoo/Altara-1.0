<?php


namespace App\Repositories;


use App\Inventory;

class InventoryRepository extends Repository
{

    public function model()
    {
        return Inventory::class;
    }

    public function getSummary($filter)
    {
        return $this->model::filter($filter)->withCount('transfers')->get();
    }
}
