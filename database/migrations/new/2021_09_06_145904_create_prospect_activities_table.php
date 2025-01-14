<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProspectActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prospect_activities', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('contact_customer_id');
            $table->unsignedInteger('user_id')->nullable();
            $table->string('type')->nullable();
            $table->string('prospect_activity_type')->nullable();
            $table->unsignedBigInteger('prospect_activity_type_id')->nullable();
            $table->string('text')->nullable();
            $table->date('date');
            $table->timestamps();
            //foreign keys
            $table->foreign('contact_customer_id')->references('id')->on('contact_customers');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prospect_activities');
    }
}
