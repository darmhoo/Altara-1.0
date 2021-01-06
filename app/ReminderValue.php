<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReminderValue extends Model
{
    protected $guarded = [];

    const FIRST_MESSAGE = 7;
    const SECOND_MESSAGE = 14;
    const THIRD_MESSAGE = 21;
    const FIRST_CALL = 28;
    const SECOND_CALL = 35;
    const THIRD_CALL = 42;
    const FIRST_COLLECTION = 49;
    const SECOND_COLLECTION = 56;
    const THIRD_COLLECTION = 63;
    const FIRST_RECOVERY = 70;
    const SECOND_RECOVERY = 77;
    const THIRD_RECOVERY = 84;
}
