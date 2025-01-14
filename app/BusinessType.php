<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessType extends Model
{
    protected $guarded = [];
    const ALTARA_CREDIT_PRODUCT_SLUG = 'ac_products';
    const ALTARA_PAY_PRODUCT_SLUG = 'ap_products';
    const ALTARA_CREDIT_CASH_LOAN_SLUG = 'ac_cash_loan';
    const ALTARA_PAY_CASH_LOAN_SLUG = 'ap_cash_loan';
    const ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG = 'ap_cash_loan-product';
    const ALTARA_PAY_STARTER_CASH_LOAN_SLUG = 'ap_starter_cash_loan';
    const ALTARA_PAY_RENTALS_SLUG = 'ap_rentals';
    const ALTARA_PAY_EMPLOYEE_CASH_LOAN_SLUG = 'ap_employee_cash_loan';
    const ALTARA_PAY_STARTER_CASH_NINE_MONTHS = 'ap_starter_cash_nine_months';
    const ALTARA_PAY_SUPER_LOAN_RENEWAL = 'ap_super_loan-renewal';
    const ALTARA_PAY_SUPER_LOAN_NEW = 'ap_super_loan-new';
    const ALTARA_PAY_CASH_LOAN_NO_COLLATERAL = 'ap_cash_loan-no_collateral';
    const ALTARA_PAY_STARTER_CASH_LOAN_NO_COLLATERAL = 'ap_starter_cash_loan-no_collateral';

    //
    public function newOrder()
    {
        return $this->belongsTo(NewOrder::class);
    }
}
