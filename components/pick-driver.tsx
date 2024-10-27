'use client'

import 'leaflet/dist/leaflet.css'

import React, { useState, useEffect } from 'react'
import { Phone, MessageSquare, MapPin, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

import L from 'leaflet'

export default function PickDriver() {
	const [driverAssigned, setDriverAssigned] = useState(false)
	const [searchProgress, setSearchProgress] = useState(0)

	useEffect(() => {
		const map = L.map('map', {
			center: L.latLng(49.2125578, 16.62662018),
			zoom: 14,
		})

		const key = 'Tp6qzLXagp3MXlO1ZnCk'

		L.tileLayer(
			`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
			{
				//style URL
				tileSize: 512,
				zoomOffset: -1,
				minZoom: 1,
				attribution:
					'\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
				crossOrigin: true,
			},
		).addTo(map)

		return () => {
			map.remove()
		}
	}, [])

	useEffect(() => {
		const timer = setInterval(() => {
			setSearchProgress((oldProgress) => {
				if (oldProgress === 100) {
					clearInterval(timer)
					setDriverAssigned(true)
					return 100
				}
				return Math.min(oldProgress + 10, 100)
			})
		}, 500)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 text-white">
				<h1 className="text-lg font-semibold text-center">
					{driverAssigned ? 'Driver Assigned' : 'Finding Nearby Driver'}
				</h1>
			</header>

			{/* Main content */}
			<main className="flex-grow p-4 space-y-4">
				{/* Driver search animation */}
				{!driverAssigned && (
					<div className="bg-white p-6 rounded-lg shadow-md text-center">
						<div className="w-24 h-24 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
						<p className="text-lg font-semibold mb-2">
							Searching for nearby drivers
						</p>
						<Progress value={searchProgress} className="w-full" />
					</div>
				)}

				{/* Driver information */}
				{driverAssigned && (
					<div className="bg-white p-6 rounded-lg shadow-md">
						<div className="flex items-center mb-4">
							<div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
								<User className="w-8 h-8 text-gray-600" />
							</div>
							<div>
								<h2 className="text-xl font-semibold">John Doe</h2>
								<p className="text-gray-600">
									Vehicle: White Toyota Vios (ABC 123)
								</p>
							</div>
						</div>
						<div className="flex justify-between text-sm text-gray-600 mb-4">
							<div className="flex items-center">
								<Clock className="w-4 h-4 mr-1" />
								<span>Pickup in: 10 mins</span>
							</div>
							<div className="flex items-center">
								<MapPin className="w-4 h-4 mr-1" />
								<span>Delivery in: 25 mins</span>
							</div>
						</div>
					</div>
				)}

				{/* Map placeholder */}
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold mb-2">Driver Location</h3>
					<div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
						<div id="map" className="w-full h-full" />
					</div>
				</div>

				{/* Contact options */}
				<div className="flex space-x-4">
					<Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
						<Phone className="w-4 h-4 mr-2" />
						Call Driver
					</Button>
					<Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
						<MessageSquare className="w-4 h-4 mr-2" />
						Message
					</Button>
				</div>

				{/* Support option */}
				<Button
					variant="outline"
					className="w-full border-green-500 text-green-500"
				>
					Contact Support
				</Button>
			</main>
		</div>
	)
}
