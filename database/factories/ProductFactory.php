<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->text(70),
            'price' => $this->faker->numberBetween(500, 5000),
            'discount' => $this->faker->numberBetween(0, 10),
            'quantity' => $this->faker->numberBetween(1, 10)
        ];
    }
}
