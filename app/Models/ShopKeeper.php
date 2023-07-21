<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Str;

class ShopKeeper extends Model
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $primaryKey = 'id'; // Use 'id' instead of 'id' for the primary key
    public $incrementing = false; // Disable auto-increment for UUIDs
    protected $keyType = 'string';
    protected $fillable = [
        'shopkeeper_id',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        // Automatically generate UUIDs for the 'id' field before creating a new record
        static::creating(function ($model) {
            $uuid = Str::uuid();

            // Check if the UUID already exists in the database
            while (self::where('shopkeeper_id', $uuid)->exists()) {
                // If it exists, regenerate the UUID
                $uuid = Str::uuid();
            }

            // Set the unique UUID for the 'id' field
            $model->shopkeeper_id = $uuid;
        });

    }
}
