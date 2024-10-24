import React from "react";
import {
  ChevronLeft,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Utensils,
  Bike,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 p-4 flex items-center text-white">
        <Button variant="ghost" size="icon" className="mr-2 text-white">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Order #12345</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow overflow-y-auto">
        {/* Confirmation Message */}
        <div className="bg-white p-4 mb-2">
          <h2 className="text-xl font-bold text-green-500 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600">
            Your order has been received and is being prepared.
          </p>
        </div>

        {/* Order Status Tracker */}
        <div className="bg-white p-4 mb-2">
          <h3 className="text-lg font-semibold mb-2">Order Status</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Utensils className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="font-medium">Preparing your order</p>
                <p className="text-sm text-gray-500">
                  Estimated ready in 15 mins
                </p>
              </div>
            </div>
            <Progress value={33} className="h-2 w-full bg-gray-200" />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                <Bike className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-500">Out for delivery</p>
                <p className="text-sm text-gray-500">
                  Estimated arrival in 30 mins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white p-4 mb-2">
          <h3 className="text-lg font-semibold mb-2">Order Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>1x Margherita Pizza (Medium)</span>
              <span>$15.99</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Extra cheese, Mushrooms</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>$0.99</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span>$19.97</span>
            </div>
          </div>
        </div>

        {/* Map View (Placeholder) */}
        <div className="bg-white p-4 mb-2">
          <h3 className="text-lg font-semibold mb-2">Delivery Route</h3>
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
            Map View Placeholder
          </div>
        </div>

        {/* Delivery Details */}
        <div className="bg-white p-4 mb-2">
          <h3 className="text-lg font-semibold mb-2">Delivery Details</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-5 w-5 mr-2" />
            <p>123 Main St, Apt 4B, Cityville</p>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <p>Estimated delivery by 7:30 PM</p>
          </div>
        </div>
      </main>

      {/* Contact Options */}
      <div className="p-4 bg-white border-t flex justify-between">
        <Button
          variant="outline"
          className="w-[48%] border-green-500 text-green-500"
        >
          <Phone className="h-5 w-5 mr-2" /> Call Driver
        </Button>
        <Button
          variant="outline"
          className="w-[48%] border-green-500 text-green-500"
        >
          <MessageSquare className="h-5 w-5 mr-2" /> Chat Support
        </Button>
      </div>
    </div>
  );
}
