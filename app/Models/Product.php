<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected array $fillable = [
        'title',
        'description',
        'price',
        'quantity'
    ];

    public function author()
    {
        return $this->belongsTo(User::class);
    }

    public function categories()
    {
        return $this->morphToMany(CategoryProduct::class, 'categorizable');
    }

    public function getTotalPriceAttribute()
    {
        $price = $this->price;

        // if discount is setted
        if (!empty($this->discount)) {
            $price = $price - ($price * $this->discount / 100);
        }

        return round($price);
    }
}
