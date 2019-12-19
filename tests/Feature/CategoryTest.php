<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class CategoryTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetOneCategory()
    {
        $id = 1;
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get(`/api/category/$id`);
        $response->assertSuccessful();
    }
    public function testGetAllCategories(){
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get(`/api/category`);
        $response->assertSuccessful();
    }
    public function testCreateCategory(){
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $category = [
            'name' => 'Vehicle'
        ];
        $response = $this->actingAs($user, 'api')->json('POST', '/api/category', $category);
        $response->assertSuccessful();
    }
}
