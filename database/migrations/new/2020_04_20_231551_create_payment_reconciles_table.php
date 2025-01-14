<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentReconcilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_reconciles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reconcile_number')->index()->unique();
            $table->unsignedInteger('payment_method_id')->index();
            $table->foreign('payment_method_id')->references('id')->on('payment_methods')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('branch_id')->index();
            $table->foreign('branch_id')->references('id')->on('branches')->onDelete('cascade')->onUpdate('cascade');
            $table->double('total')->default(0);
            $table->double('cash_at_hand')->nullable();
            $table->double('deposited')->nullable();
            $table->date('date');
            $table->timestamps();

            $table->unique(['branch_id', 'payment_method_id', 'date'], 'bra_id_met_id_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_reconciles');
    }
}
