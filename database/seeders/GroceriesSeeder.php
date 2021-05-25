<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroceriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //dummy adjectives and items
        $modifier = ['Chocolate', 'Vanilla', 'Strong', 'Dairy-Free', 'Gluten Free', 'Soft'];
        $items = ['Milk', 'Cookies', 'Bread', 'Butter', 'Dish Soap', 'Towels'];

        // empty table
        DB::table('groceries')->truncate();
        
        // generate 5 fresh records
        for ($records=0; $records < 5; $records++){
            // pick a random modifier and item and merge them together
            DB::table('groceries')->insert([
                'item'=> $modifier[rand(0, (count($modifier) - 1))] . ' ' . $items[rand(0, (count($items) - 1))]
            ]);
        }

        
    }
}
