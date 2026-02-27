<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LittererImage extends Model
{
    //
    protected $fillable = [
        'litterer_report_id',
        'file_path'
    ];
}
