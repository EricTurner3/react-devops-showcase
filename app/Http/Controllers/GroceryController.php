<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Grocery;

class GroceryController extends Controller
{
    // the main grocery list
    public function index(){
        $grocery_list = Grocery::orderBy('created_at', 'desc')->get();
        return $grocery_list->toJson();
    }
    // add a new item
    public function store(Request $request){
        $validatedData = $request->validate([
            'item' => 'required'
          ]);
  
          $item = Grocery::create([
            'item' => $validatedData['item']
          ]);
  
          return response()->json('Item Added!');
    }
    // show a single item
    public function show($id){
        $grocery_item = Grocery::orderBy('created_at', 'desc')->find($id);
        return $grocery_item->toJson();
    }
    // check off an item from the list
    public function markAsCompleted(Grocery $grocery){
        $grocery->is_completed = true;
        $grocery->update();

        return response()->json('Grocery List Updated!');
    }
}
