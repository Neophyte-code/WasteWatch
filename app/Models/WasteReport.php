<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WasteReport extends Model
{
    //
    protected $fillable = [
        'waste_type',
        'weight',
        'latitude',
        'longitude',
        'user_id',
    ];

    public function images(): HasMany
    {
        return $this->hasMany(ReportImage::class);
    }
}
