<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class LateFee extends Model
{
    //
    use Filterable;
    protected $guarded = [];
    const CREATED_AT = 'date_created';
    const UPDATED_AT = 'date_updated';

    public function newOrder(){
        return $this->belongsTo(NewOrder::class, 'order_id');
    }
}
