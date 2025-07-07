import React, { useState } from "react";
import { ChevronLeft, Search, ShoppingCart, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useNavigate } from "react-router-dom";

export default function Component() {
  const navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Pizza", "Pasta", "Salads", "Drinks"];
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 12.99,
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      category: "Pizza",
      price: 14.99,
      description: "Pizza topped with pepperoni slices",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      category: "Pasta",
      price: 13.99,
      description: "Pasta with eggs, cheese, and pancetta",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Caesar Salad",
      category: "Salads",
      price: 9.99,
      description: "Romaine lettuce with Caesar dressing and croutons",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Drinks",
      price: 2.99,
      description: "Classic cola drink",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const addToCart = (price: number) => {
    setCartTotal((prevTotal) => prevTotal + price);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 p-4 flex items-center text-white">
        <Button variant="ghost" size="icon" className="mr-2 text-white">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Pizza Palace</h1>
      </header>

      {/* Search Bar */}
      <div className="p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search menu"
            className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300"
          />
        </div>
      </div>

      {/* Category Filters */}
      <ScrollArea className="bg-white">
        <div className="flex p-2 space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Menu Items */}
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-4">
          {menuItems
            .filter(
              (item) =>
                activeCategory === "All" || item.category === activeCategory
            )
            .map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                    <Button size="sm" onClick={() => addToCart(item.price)}>
                      <Plus className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Cart Footer */}
      <footer className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Your Order</p>
            <p className="font-semibold">${cartTotal.toFixed(2)}</p>
          </div>
          <Button
            onClick={() => {
              navigate("/checkout");
            }}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            View Cart
          </Button>
        </div>
      </footer>
    </div>
  );
}
