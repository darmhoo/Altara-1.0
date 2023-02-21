<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CreditCheckerVerification extends Model
{

    const PENDING = 'pending';
    const PASSED = 'passed';
    const FAILED = 'failed';
    const STATUSES = [self::PENDING, self::PASSED, self::FAILED];

    protected $guarded = [];

}
