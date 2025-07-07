import React, { useState } from "react";
import { ChevronLeft, Minus, Plus, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState<string[]>([]);

  const handleSizeChange = (value: string) => setSize(value);

  const handleToppingToggle = (value: string) => {
    setToppings((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 p-4 flex items-center text-white">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 text-white"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Customize Your Order</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow overflow-y-auto">
        {/* Restaurant Logo */}
        <div className="w-full h-24 bg-white flex items-center justify-center">
          <img
            src="/placeholder.svg?height=96&width=96"
            alt="Pizza Palace Logo"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        {/* Food Details */}
        <div className="p-4 bg-white">
          <h2 className="text-xl font-bold">Margherita Pizza</h2>
          <p className="text-gray-600 mt-1">
            Classic pizza with tomato sauce, mozzarella, and basil.
          </p>
          <p className="text-green-600 font-semibold mt-2">$12.99</p>
        </div>

        {/* Customization Options */}
        <div className="mt-2 bg-white">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold mb-2">Choose Size</h3>
            <RadioGroup value={size} onValueChange={handleSizeChange}>
              {["Small", "Medium", "Large"].map((sizeOption) => (
                <div
                  key={sizeOption.toLowerCase()}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center">
                    <RadioGroupItem
                      value={sizeOption.toLowerCase()}
                      id={sizeOption.toLowerCase()}
                    />
                    <Label htmlFor={sizeOption.toLowerCase()} className="ml-2">
                      {sizeOption}
                    </Label>
                  </div>
                  <span className="text-gray-600">
                    $
                    {(
                      12.99 +
                      (sizeOption === "Small"
                        ? -2
                        : sizeOption === "Large"
                        ? 2
                        : 0)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Extra Toppings</h3>
            {["Mushrooms", "Olives", "Onions", "Extra Cheese"].map(
              (topping) => (
                <div
                  key={topping}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center">
                    <Checkbox
                      id={topping}
                      checked={toppings.includes(topping)}
                      onCheckedChange={() => handleToppingToggle(topping)}
                    />
                    <label
                      htmlFor={topping}
                      className="ml-2 text-sm font-medium"
                    >
                      {topping}
                    </label>
                  </div>
                  <span className="text-gray-600">+$1.50</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="p-4 bg-white mt-2 flex items-center justify-between">
          <span className="text-lg font-semibold">Quantity</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="border-green-500 text-green-500"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-lg font-semibold w-8 text-center">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="border-green-500 text-green-500"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      {/* Add to Cart Button */}
      <div className="p-4 bg-white border-t">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg h-14 rounded-lg">
          <span>
            Add to Cart - $
            {(12.99 * quantity + toppings.length * 1.5).toFixed(2)}
          </span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
