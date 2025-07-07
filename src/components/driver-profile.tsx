import React from 'react'
import {
	ChevronLeft,
	User,
	Truck,
	Bell,
	HelpCircle,
	LogOut,
	Star,
} from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Switch } from './ui/switch'

export default function DriverProfile() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 flex items-center text-white">
				<Button variant="ghost" size="icon" className="mr-2 text-white">
					<ChevronLeft className="h-6 w-6" />
				</Button>
				<h1 className="text-lg font-semibold">Profile & Settings</h1>
			</header>

			{/* Main content */}
			<main className="flex-grow p-4 space-y-4">
				{/* Driver Info */}
				<div className="bg-white p-4 rounded-lg shadow-md flex items-center">
					<Avatar className="h-16 w-16 mr-4">
						<AvatarImage
							src="/placeholder.svg?height=64&width=64"
							alt="Driver"
						/>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<div>
						<h2 className="text-xl font-semibold">John Doe</h2>
						<div className="flex items-center text-yellow-500">
							<Star className="h-4 w-4 fill-current" />
							<span className="ml-1">4.8</span>
						</div>
					</div>
				</div>

				{/* Vehicle Info */}
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold mb-2">Vehicle Information</h3>
					<p className="text-gray-600">Toyota Corolla (2019)</p>
					<p className="text-gray-600">License Plate: ABC 123</p>
				</div>

				{/* Settings */}
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="p-4 border-b flex justify-between items-center">
						<div className="flex items-center">
							<User className="h-5 w-5 mr-3 text-gray-500" />
							<span>Edit Profile</span>
						</div>
						<ChevronLeft className="h-5 w-5 text-gray-400 transform rotate-180" />
					</div>
					<div className="p-4 border-b flex justify-between items-center">
						<div className="flex items-center">
							<Truck className="h-5 w-5 mr-3 text-gray-500" />
							<span>Vehicle Details</span>
						</div>
						<ChevronLeft className="h-5 w-5 text-gray-400 transform rotate-180" />
					</div>
					<div className="p-4 border-b flex justify-between items-center">
						<div className="flex items-center">
							<Bell className="h-5 w-5 mr-3 text-gray-500" />
							<span>Notifications</span>
						</div>
						<Switch />
					</div>
					<div className="p-4 flex justify-between items-center">
						<div className="flex items-center">
							<HelpCircle className="h-5 w-5 mr-3 text-gray-500" />
							<span>Help & Support</span>
						</div>
						<ChevronLeft className="h-5 w-5 text-gray-400 transform rotate-180" />
					</div>
				</div>

				{/* Logout Button */}
				<Button
					variant="outline"
					className="w-full text-red-500 border-red-500"
				>
					<LogOut className="h-5 w-5 mr-2" />
					Log Out
				</Button>
			</main>
		</div>
	)
}
