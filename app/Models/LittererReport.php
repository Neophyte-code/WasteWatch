<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LittererReport extends Model
{
    //
    protected $fillable = [
        'name',
        'estimated_age',
        'gender',
        'distinguishing_features',
        'latitude',
        'longitude',
        'user_id'
    ];

    public function images(): HasMany
    {
        return $this->hasMany(LittererImage::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
