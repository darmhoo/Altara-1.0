<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepaymentDuration extends Model
{
    //

    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}