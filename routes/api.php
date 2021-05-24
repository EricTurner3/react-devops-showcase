<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroceryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('groceries', [GroceryController::class, 'index']);
Route::post('groceries', [GroceryController::class, 'store']);
Route::get('groceries/{id}', [GroceryController::class, 'show']);
Route::put('groceries/{grocery}', [GroceryController::class, 'markAsCompleted']);
