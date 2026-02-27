<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReportImage extends Model
{
    //
    protected $fillable = [
        'waste_report_id',
        'file_path'
    ];
}
