<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryProduct extends Model
{
    use HasFactory;

    public function category()
    {
        return $this->morphedByMany(Category::class, 'categorizable');
    }

    public function product()
    {
        return $this->morphedByMany(Product::class, 'categorizable');
    }


}
