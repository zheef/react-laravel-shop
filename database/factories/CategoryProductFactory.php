<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\CategoryProduct;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CategoryProduct::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => Category::all()->random(1)->first()->id,
            'product_id' => Product::all()->random(1)->first()->id
        ];
    }
}
