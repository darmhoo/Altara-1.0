<?php

namespace App\Repositories;

use App\Feedback;

class FeedbackRepository extends Repository
{

    public function model()
    {
        return Feedback::class;
    }

    public function query($filter)
    {
        return $this->model::filter($filter);
    }
}
