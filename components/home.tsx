import React from 'react'
import { Search, Home, Receipt, User, MapPin, Star, Clock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image from 'next/image'

export default function HomeScreen() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4">
				<div className="flex items-center text-white mb-2">
					<MapPin className="h-5 w-5 mr-2" />
					<span className="text-sm">Deliver to: 123 Main St, Cityville</span>
				</div>
				<div className="relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					<Input
						type="text"
						placeholder="Search for food or restaurants"
						className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 bg-white"
					/>
				</div>
			</header>

			{/* Main content */}
			<main className="flex-grow overflow-y-auto">
				{/* Categories */}
				<ScrollArea className="w-full whitespace-nowrap">
					<div className="flex p-4 space-x-4">
						{['All', 'Fast Food', 'Pizza', 'Asian', 'Healthy', 'Desserts'].map(
							(category) => (
								<Button
									key={category}
									variant="outline"
									className="flex-shrink-0 rounded-full"
								>
									{category}
								</Button>
							),
						)}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>

				{/* Featured Restaurants */}
				<section className="p-4">
					<h2 className="text-lg font-semibold mb-2">Featured Restaurants</h2>
					<div className="grid grid-cols-2 gap-4">
						{[1, 2, 3, 4].map((i) => (
							<div
								key={i}
								className="bg-white rounded-lg shadow overflow-hidden"
							>
								<Image
									src={`/placeholder.svg?height=100&width=200`}
									alt="Restaurant"
									width={200}
									height={96}
									className="w-full h-24 object-cover"
								/>
								<div className="p-2">
									<h3 className="font-semibold">Restaurant {i}</h3>
									<div className="flex items-center text-sm text-gray-500">
										<Star className="h-4 w-4 text-yellow-400 mr-1" />
										<span>
											4.{i} · $$ · 1.{i} km
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Recent Orders */}
				<section className="p-4">
					<h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
					<div className="space-y-2">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="bg-white rounded-lg shadow p-3 flex items-center"
							>
								<Image
									src={`/placeholder.svg?height=50&width=50`}
									alt="Restaurant"
									width={48}
									height={48}
									className="w-12 h-12 rounded-full object-cover mr-3"
								/>
								<div className="flex-grow">
									<h3 className="font-semibold">Order from Restaurant {i}</h3>
									<p className="text-sm text-gray-500">2 items · $1{i}.99</p>
								</div>
								<Button variant="outline" size="sm">
									Reorder
								</Button>
							</div>
						))}
					</div>
				</section>
			</main>

			{/* Footer Navigation */}
			<nav className="bg-white border-t border-gray-200 p-2">
				<div className="flex justify-around">
					<Button variant="ghost" className="flex flex-col items-center">
						<Home className="h-5 w-5 mb-1" />
						<span className="text-xs">Home</span>
					</Button>
					<Button variant="ghost" className="flex flex-col items-center">
						<Search className="h-5 w-5 mb-1" />
						<span className="text-xs">Search</span>
					</Button>
					<Button variant="ghost" className="flex flex-col items-center">
						<Receipt className="h-5 w-5 mb-1" />
						<span className="text-xs">Orders</span>
					</Button>
					<Button variant="ghost" className="flex flex-col items-center">
						<User className="h-5 w-5 mb-1" />
						<span className="text-xs">Profile</span>
					</Button>
				</div>
			</nav>
		</div>
	)
}
