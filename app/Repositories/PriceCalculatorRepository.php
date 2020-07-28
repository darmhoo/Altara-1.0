<?php

namespace App\Repositories;

use App\PriceCalculator;

class PriceCalculatorRepository extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return PriceCalculator::class;
    }
}
