import React, { useState } from "react";
import { Star, ThumbsUp, Bike, DollarSign, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Component() {
  const [foodRating, setFoodRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [tipAmount, setTipAmount] = useState("");

  const renderStars = (rating: number, setRating: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            variant="ghost"
            size="sm"
            className={`p-0 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          >
            <Star className="h-8 w-8 fill-current" />
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 p-4 text-white">
        <h1 className="text-lg font-semibold">Order Feedback</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow overflow-y-auto p-4 space-y-4">
        {/* Delivery Confirmation */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <ThumbsUp className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-2">
            Order Delivered!
          </h2>
          <p className="text-center text-gray-600">
            We hope you enjoyed your meal.
          </p>
        </div>

        {/* Food Rating */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">How was your food?</h3>
          {renderStars(foodRating, setFoodRating)}
        </div>

        {/* Delivery Rating */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">How was the delivery?</h3>
          {renderStars(deliveryRating, setDeliveryRating)}
        </div>

        {/* Additional Comments */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Additional Comments</h3>
          <Textarea placeholder="Tell us more about your experience..." />
        </div>

        {/* Tip the Driver */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Tip your driver</h3>
          <RadioGroup value={tipAmount} onValueChange={setTipAmount}>
            <div className="flex justify-between">
              {["$1", "$2", "$5", "Other"].map((amount) => (
                <div key={amount} className="flex items-center space-x-2">
                  <RadioGroupItem value={amount} id={`tip-${amount}`} />
                  <Label htmlFor={`tip-${amount}`}>{amount}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg h-12 rounded-lg">
          Submit Feedback
        </Button>

        {/* Promotions */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Recommended for you</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-medium">Pizza Palace</p>
                <p className="text-sm text-gray-500">20% off your next order</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 p-2">
        <div className="flex justify-around">
          <Button variant="ghost" className="flex flex-col items-center">
            <Bike className="h-5 w-5 mb-1" />
            <span className="text-xs">Orders</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <DollarSign className="h-5 w-5 mb-1" />
            <span className="text-xs">Rewards</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
