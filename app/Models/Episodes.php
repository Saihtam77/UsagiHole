<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episodes extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'video',
        'numero',
        'anime_id',
    ];

    public function anime()
    {
        return $this->belongsTo(Anime::class);
    }
}
