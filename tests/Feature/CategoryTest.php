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
        $user = factory(User::class)->make();
        $user->api_token = str_random(60);
        $response = $this->actingAs($user, 'api')->get('/api/category/1');
        $response->assertSuccessful();
    }
}
