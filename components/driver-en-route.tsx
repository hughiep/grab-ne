import React from 'react'
import {
	Phone,
	MessageSquare,
	MapPin,
	Clock,
	User,
	Navigation,
	CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function DriverEnRoute() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 text-white">
				<h1 className="text-lg font-semibold text-center">
					En Route to Customer
				</h1>
			</header>

			{/* Main content */}
			<main className="flex-grow p-4 space-y-4">
				{/* Progress */}
				<div className="bg-white p-4 rounded-lg shadow-md">
					<div className="flex justify-between mb-2">
						<span className="text-sm font-medium text-green-500">
							Picked Up
						</span>
						<span className="text-sm font-medium">Delivered</span>
					</div>
					<Progress value={50} className="w-full" />
				</div>

				{/* Customer details */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<div className="flex items-center mb-4">
						<div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
							<User className="w-6 h-6 text-gray-500" />
						</div>
						<div>
							<h2 className="text-xl font-semibold">John Doe</h2>
							<p className="text-gray-600">Customer</p>
						</div>
					</div>
					<div className="flex justify-between text-sm text-gray-600 mb-4">
						<div className="flex items-center">
							<Clock className="w-4 h-4 mr-1" />
							<span>ETA: 10 mins</span>
						</div>
						<div className="flex items-center">
							<MapPin className="w-4 h-4 mr-1" />
							<span>Distance: 2.5 km</span>
						</div>
					</div>
				</div>

				{/* Delivery location */}
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold mb-2">Delivery Location</h3>
					<p className="text-gray-600 mb-2">456 Oak St, Apt 7B, Cityville</p>
					<div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center mb-2">
						<MapPin className="h-8 w-8 text-gray-400" />
					</div>
					<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
						<Navigation className="w-4 h-4 mr-2" />
						Navigate to Customer
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
			<footer className="bg-white border-t border-gray-200 p-4 space-y-2">
				<div className="flex justify-between">
					<Button variant="outline" className="flex-1 mr-2">
						<Phone className="w-4 h-4 mr-2" />
						Call Customer
					</Button>
					<Button variant="outline" className="flex-1 ml-2">
						<MessageSquare className="w-4 h-4 mr-2" />
						Message Customer
					</Button>
				</div>
				<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
					<CheckCircle className="w-4 h-4 mr-2" />
					Mark as Delivered
				</Button>
			</footer>
		</div>
	)
}
