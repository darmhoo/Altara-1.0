<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    //
    use Filterable;
    protected $guarded = [];
    protected $with = ['reason:id,reason', 'user:id,full_name', 'customer:id,name'];
    protected $table = 'feed_backs';

    public static function rules()
    {
        return [
            'reason_id' => 'required|exists:reasons,id',
            'todo_id' => 'sometimes|exists:todos,id',
            'notes' => 'sometimes|string',
            'user_id' => 'required|exists:users,id',
            'customer_id' => 'required|exists:contact_customers,id'

        ];
    }
    public static function updateRules()
    {
        return [
            'reason_id' => 'sometimes|required|exists:reasons,id',
            'todo_id' => 'sometimes|exists:todos,id',
            'notes' => 'sometimes|string',
            'user_id' => 'sometimes|required|exists:users,id',
            'customer_id' => 'sometimes|required|exists:contact_customers,id'

        ];
    }

    public function reason()
    {
        return $this->belongsTo(Reason::class);
    }

    public function customer()
    {
        return $this->belongsTo(ContactCustomer::class, 'customer_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function todo()
    {
        return $this->belongsTo(Todo::class);
    }

    public function prospectActivities()
    {
        return $this->morphMany(ProspectActivity::class, 'prospectActivityType', 'prospect_activity_type', 'prospect_activity_type_id');
    }

}
