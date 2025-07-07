import React from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

export default function OrderHistory() {
	const orders = [
		{
			id: 1,
			restaurant: 'Pizza Palace',
			items: '1x Margherita, 1x Coke',
			total: '$15.99',
			date: '2023-06-15',
			status: 'Delivered',
		},
		{
			id: 2,
			restaurant: 'Burger Barn',
			items: '2x Cheeseburger, 1x Fries',
			total: '$22.50',
			date: '2023-06-10',
			status: 'Delivered',
		},
		{
			id: 3,
			restaurant: 'Sushi Spot',
			items: '1x California Roll, 1x Miso Soup',
			total: '$18.75',
			date: '2023-06-05',
			status: 'Cancelled',
		},
		{
			id: 4,
			restaurant: 'Taco Town',
			items: '3x Beef Tacos, 1x Guacamole',
			total: '$16.25',
			date: '2023-05-30',
			status: 'Delivered',
		},
		{
			id: 5,
			restaurant: 'Pasta Place',
			items: '1x Spaghetti Carbonara, 1x Garlic Bread',
			total: '$20.00',
			date: '2023-05-25',
			status: 'Delivered',
		},
	]

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 flex items-center text-white">
				<Button variant="ghost" size="icon" className="mr-2 text-white">
					<ChevronLeft className="h-6 w-6" />
				</Button>
				<h1 className="text-lg font-semibold">Order History</h1>
			</header>

			{/* Main content */}
			<ScrollArea className="flex-grow">
				<main className="p-4 space-y-4">
					{orders.map((order) => (
						<div key={order.id} className="bg-white rounded-lg shadow-md p-4">
							<div className="flex justify-between items-center mb-2">
								<h2 className="font-semibold">{order.restaurant}</h2>
								<span
									className={`text-sm ${order.status === 'Delivered' ? 'text-green-500' : 'text-red-500'}`}
								>
									{order.status}
								</span>
							</div>
							<p className="text-sm text-gray-600 mb-2">{order.items}</p>
							<div className="flex justify-between items-center text-sm">
								<span>{order.date}</span>
								<span className="font-semibold">{order.total}</span>
							</div>
							<div className="mt-3 flex justify-between items-center">
								<Button
									variant="outline"
									size="sm"
									className="text-green-500 border-green-500"
								>
									Reorder
								</Button>
								{order.status === 'Delivered' && (
									<Button variant="ghost" size="sm" className="text-yellow-500">
										<Star className="h-4 w-4 mr-1" />
										Rate Order
									</Button>
								)}
							</div>
						</div>
					))}
				</main>
			</ScrollArea>
		</div>
	)
}
