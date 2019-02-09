<?php

use App\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('categories')->delete();

       $categories = [
          'Freezers',
          'Fridges',
          'Washing Machines',
          'Generators',
          'Fans',
          'Cookers',
          'Air Conditioners',
          'Ovens',
          'Sewing Machines',
          'Televisions',
          'Phones',
          'Water Dispensers',
          'Home Theaters',
          'Laptop Computers'
       ];

       $length  = count($categories);
       for ($i = 0; $i < $length; $i++){
          Category::create([
             'name' => $categories[$i]
          ]);
       }
    }
}
