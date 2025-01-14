<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Caution extends Model
{
    protected $guarded = [];

    protected $appends = ['reason_min', 'penalty_min'];

    public function getReasonMinAttribute()
    {
        return Str::limit($this->attributes['reason'], '20');
    }

    public function getPenaltyMinAttribute()
    {
        return Str::limit($this->attributes['penalty'], '20');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function Issuer()
    {
        return $this->belongsTo(User::class);
    }

    public static function form()
    {
        return [
            'issuer_id' => auth('api')->user()->id,
            'user_id' => '',
            'reason' => '',
            'penalty' => '',
            'date' => date('Y-m-d'),
        ];
    }

    public static function cautions()
    {
        return [
            ['reason' => 'Lateness to work', 'penalty' => 'salary deduction'],
            ['reason' => 'Absence without permission', 'penalty' => 'salary deduction'],
            ['reason' => 'Poor work performance (Consistently poor KPI score)', 'penalty' => 'NO BONUS PAY'],
            ['reason' => 'Not conforming with the company lay down process and procedures', 'penalty' => 'NO BONUS PAY'],
            ['reason' => 'Not being in line with Altara values. (Misalignment with values)', 'penalty' => 'NO BONUS PAY'],
            ['reason' => 'Mismanagement of funds', 'penalty' => 'salary deduction'],
        ];
    }
}
