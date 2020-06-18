<?php

use App\RepaymentCycle;
use Illuminate\Database\Seeder;

class RepaymentCycleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $name = ['bi_monthly', 'monthly', 'custom'];
        $value = [14, 28, 30];

        for ($i=0; $i<count($name); $i++){
            RepaymentCycle::create([
                'name' => $name[$i],
                'value' => $value[$i]
            ]);
        }
    }
}
