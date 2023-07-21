<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Shop extends Model
{
    use HasFactory;

    protected $primaryKey = 'id'; // Use 'id' instead of 'id' for the primary key
    public $incrementing = false; // Disable auto-increment for UUIDs
    protected $keyType = 'string';
    protected $fillable = [
        'shop_id',
        'name',
        'email',
        'password',
    ];

    protected static function boot()
    {
        parent::boot();

        // Automatically generate UUIDs for the 'id' field before creating a new record
        static::creating(function ($model) {
            $uuid = Str::uuid();

            // Check if the UUID already exists in the database
            while (self::where('shop_id', $uuid)->exists()) {
                // If it exists, regenerate the UUID
                $uuid = Str::uuid();
            }

            // Set the unique UUID for the 'id' field
            $model->shop_id = $uuid;
        });

    }

}
