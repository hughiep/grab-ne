import React from "react";
import { MapPin, Search, Car, Bike, Coffee, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Grab</h1>
        <Button variant="ghost" size="icon">
          <MapPin className="h-6 w-6" />
        </Button>
      </header>

      {/* Map (placeholder) */}
      <div className="flex-grow bg-gray-300 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Map View (Placeholder)
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white rounded-t-3xl -mt-6 p-4 space-y-4">
        {/* Search bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Where to?"
            className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-4">
          <QuickActionButton icon={<Car />} label="Ride" />
          <QuickActionButton icon={<Bike />} label="Bike" />
          <QuickActionButton icon={<Coffee />} label="Food" href="/food/menu" />
          <QuickActionButton icon={<ShoppingBag />} label="Mart" />
        </div>

        {/* Promotions */}
        <div className="bg-green-100 rounded-lg p-4">
          <h2 className="font-semibold text-green-800">Special Offer!</h2>
          <p className="text-sm text-green-700">
            Get 20% off your next ride. Use code: GRAB20
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickActionButton({
  icon,
  label,
  href = "/#",
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  return (
    <Button
      variant="outline"
      className="flex flex-col items-center justify-center h-20 bg-white"
      asChild
    >
      <Link href={href}>
        {icon}
        <span className="mt-2 text-xs">{label}</span>
      </Link>
    </Button>
  );
}
