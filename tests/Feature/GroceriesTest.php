<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GroceriesTest extends TestCase
{
    /**
     * @test /api/groceries 
     *
     * @return void
     */
     public function test_get_groceries()
     {
         $this->withoutExceptionHandling(); // more debugging
         $response = $this->getJson('/api/groceries');
 
         $response->assertStatus(200) // ensure we get a 200 - Success Status code
                  -> assertJsonStructure(['*' => [
                      'id',
                      'item',
                      'is_completed',
                      'created_at',
                      'updated_at'
                  ]]);    // ensure we get a json response in the following format
     }   
}
