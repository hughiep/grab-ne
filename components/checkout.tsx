"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  MapPin,
  CreditCard,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 p-4 flex items-center text-white">
        <Button variant="ghost" size="icon" className="mr-2 text-white">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Review Order</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow overflow-y-auto">
        {/* Order Summary */}
        <div className="bg-white p-4 mb-2">
          <h2 className="text-lg font-semibold mb-2">Your Order</h2>
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="font-medium">1x Margherita Pizza (Medium)</p>
              <p className="text-sm text-gray-600">Extra cheese, Mushrooms</p>
            </div>
            <p className="font-semibold">$15.99</p>
          </div>
          <Button
            variant="outline"
            className="w-full mt-2 text-green-500 border-green-500"
          >
            <Plus className="h-4 w-4 mr-2" /> Add More Items
          </Button>
        </div>

        {/* Delivery Details */}
        <div className="bg-white p-4 mb-2">
          <h2 className="text-lg font-semibold mb-2">Delivery Details</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="h-5 w-5 mr-2" />
            <p>123 Main St, Apt 4B, Cityville</p>
          </div>
          <Input
            placeholder="Add delivery instructions (optional)"
            className="w-full"
          />
        </div>

        {/* Payment Method */}
        <div className="bg-white p-4 mb-2">
          <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="ml-2 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" /> Credit Card
                </Label>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <RadioGroupItem value="wallet" id="wallet" />
                <Label htmlFor="wallet" className="ml-2 flex items-center">
                  <Wallet className="h-5 w-5 mr-2" /> GrabPay Wallet
                </Label>
              </div>
            </div>
          </RadioGroup>

          {/* Credit Card Information */}
          {paymentMethod === "card" && (
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Select>
                    <SelectTrigger id="expiryDate">
                      <SelectValue placeholder="MM / YY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01/24">01/24</SelectItem>
                      <SelectItem value="02/24">02/24</SelectItem>
                      {/* Add more options as needed */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-1/2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div>
                <Label htmlFor="cardholderName">Cardholder Name</Label>
                <Input id="cardholderName" placeholder="John Doe" />
              </div>
            </div>
          )}
        </div>

        {/* Order Total */}
        <div className="bg-white p-4">
          <h2 className="text-lg font-semibold mb-2">Order Total</h2>
          <div className="flex justify-between mb-1">
            <span>Subtotal</span>
            <span>$15.99</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Delivery Fee</span>
            <span>$2.99</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Platform Fee</span>
            <span>$0.99</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2 pt-2 border-t">
            <span>Total</span>
            <span>$19.97</span>
          </div>
        </div>
      </main>

      {/* Place Order Button */}
      <div className="p-4 bg-white border-t">
        <Button
          onClick={() => router.push("/pick-driver")}
          className="w-full bg-green-500 hover:bg-green-600 text-white text-lg h-14 rounded-lg"
        >
          <span>Place Order - $19.97</span>
          <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
