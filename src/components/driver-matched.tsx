import React from 'react'
import {
	Phone,
	MessageSquare,
	MapPin,
	Clock,
	User,
	DollarSign,
	Navigation,
} from 'lucide-react'
import { Button } from './ui/button'

export default function DriverMatched() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 text-white">
				<h1 className="text-lg font-semibold text-center">New Order</h1>
			</header>

			{/* Main content */}
			<main className="flex-grow p-4 space-y-4">
				{/* Order details */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center">
							<div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
								<User className="w-6 h-6 text-gray-500" />
							</div>
							<div>
								<h2 className="text-xl font-semibold">John Doe</h2>
								<p className="text-gray-600">Customer</p>
							</div>
						</div>
						<div className="text-right">
							<p className="text-xl font-bold text-green-500">$15.50</p>
							<p className="text-sm text-gray-500">Estimated earnings</p>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-600 mb-4">
						<div className="flex items-center">
							<Clock className="w-4 h-4 mr-1" />
							<span>Pickup in: 5 mins</span>
						</div>
						<div className="flex items-center">
							<MapPin className="w-4 h-4 mr-1" />
							<span>Distance: 3.2 km</span>
						</div>
					</div>
				</div>

				{/* Pickup details */}
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold mb-2">Pickup Location</h3>
					<p className="text-gray-600 mb-2">
						Pizza Palace, 123 Main St, Cityville
					</p>
					<div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center mb-2">
						<MapPin className="h-8 w-8 text-gray-400" />
					</div>
					<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
						<Navigation className="w-4 h-4 mr-2" />
						Navigate to Pickup
					</Button>
				</div>

				{/* Order summary */}
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold mb-2">Order Summary</h3>
					<ul className="list-disc list-inside text-gray-600">
						<li>1x Margherita Pizza (Large)</li>
						<li>2x Coca-Cola (500ml)</li>
					</ul>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 p-4 flex justify-between">
				<Button variant="outline" className="flex-1 mr-2">
					<Phone className="w-4 h-4 mr-2" />
					Call
				</Button>
				<Button variant="outline" className="flex-1 ml-2">
					<MessageSquare className="w-4 h-4 mr-2" />
					Message
				</Button>
			</footer>
		</div>
	)
}
