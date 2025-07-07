'use client'

import React, { useState } from 'react'
import { Bell, Settings, MapPin, DollarSign, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useGeoLocation } from '@/hooks/use-geo-location'
import dynamic from 'next/dynamic'
import { useSyncLocation } from '@/hooks/use-sync-location'

// Dynamically import Map component to prevent SSR issues
const Map = dynamic(() => import('./map'), {
	ssr: false,
	loading: () => <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">Loading map...</div>
})

export default function DriverWaiting() {
	useSyncLocation()
	const { location } = useGeoLocation()
	const [isOnline, setIsOnline] = useState(true)

	console.log({ location })

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 flex justify-between items-center">
				<Avatar>
					<AvatarImage src="/placeholder.svg?height=40&width=40" alt="Driver" />
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
				<div className="flex items-center space-x-2">
					<Bell className="h-6 w-6 text-white" />
					<Settings className="h-6 w-6 text-white" />
				</div>
			</header>

			{/* Main content */}
			<main className="flex-grow p-4 space-y-4">
				{/* Online/Offline toggle */}
				<div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
					<span className="font-semibold">Go Online</span>
					<Switch checked={isOnline} onCheckedChange={setIsOnline} />
				</div>

				{/* Status */}
				<div className="bg-white p-6 rounded-lg shadow text-center">
					<h2 className="text-2xl font-bold mb-2">
						{isOnline ? "You&apos;re Online" : "You&apos;re Offline"}
					</h2>
					<p className="text-gray-600">
						{isOnline
							? 'Waiting for orders... Stay in a high demand area to increase your chances.'
							: 'Go online to start receiving orders.'}
					</p>
				</div>

				{/* Map placeholder */}
				<div className="bg-white p-4 rounded-lg shadow">
					<h3 className="text-lg font-semibold mb-2">Your Location</h3>
					<div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
						{location ? <Map /> : <MapPin className="h-8 w-8 text-gray-400" />}
					</div>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-white p-4 rounded-lg shadow text-center">
						<DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
						<h3 className="font-semibold">Today&apos;s Earnings</h3>
						<p className="text-xl font-bold">$85.50</p>
					</div>
					<div className="bg-white p-4 rounded-lg shadow text-center">
						<Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
						<h3 className="font-semibold">Online Hours</h3>
						<p className="text-xl font-bold">4h 30m</p>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 p-4">
				<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
					View Earnings
				</Button>
			</footer>
		</div>
	)
}
