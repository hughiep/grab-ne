import React from 'react'
import { ChevronLeft, DollarSign, TrendingUp, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export default function DriverEarnings() {
	const earnings = [
		{ id: 1, date: '2023-06-15', orders: 12, total: '$145.50' },
		{ id: 2, date: '2023-06-14', orders: 10, total: '$120.75' },
		{ id: 3, date: '2023-06-13', orders: 15, total: '$180.25' },
		{ id: 4, date: '2023-06-12', orders: 8, total: '$95.00' },
		{ id: 5, date: '2023-06-11', orders: 11, total: '$135.50' },
	]

	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-green-500 p-4 flex items-center text-white">
				<Button variant="ghost" size="icon" className="mr-2 text-white">
					<ChevronLeft className="h-6 w-6" />
				</Button>
				<h1 className="text-lg font-semibold">Earnings</h1>
			</header>

			{/* Main content */}
			<main className="flex-grow p-4 space-y-4">
				{/* Earnings Summary */}
				<div className="bg-white rounded-lg shadow-md p-4">
					<h2 className="text-lg font-semibold mb-2">Earnings Summary</h2>
					<div className="flex justify-between items-center  mb-4">
						<Select defaultValue="this-week">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select period" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="today">Today</SelectItem>
								<SelectItem value="this-week">This Week</SelectItem>
								<SelectItem value="this-month">This Month</SelectItem>
								<SelectItem value="last-month">Last Month</SelectItem>
							</SelectContent>
						</Select>
						<span className="text-2xl font-bold text-green-500">$677.00</span>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-gray-100 p-3 rounded-lg">
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<TrendingUp className="h-4 w-4 mr-1" />
								<span>Total Trips</span>
							</div>
							<span className="text-xl font-semibold">56</span>
						</div>
						<div className="bg-gray-100 p-3 rounded-lg">
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<Calendar className="h-4 w-4 mr-1" />
								<span>Online Hours</span>
							</div>
							<span className="text-xl font-semibold">38.5</span>
						</div>
					</div>
				</div>

				{/* Earnings History */}
				<div className="bg-white rounded-lg shadow-md p-4">
					<h2 className="text-lg font-semibold mb-2">Earnings History</h2>
					<ScrollArea className="h-64">
						{earnings.map((day) => (
							<div
								key={day.id}
								className="flex justify-between items-center py-3 border-b last:border-b-0"
							>
								<div>
									<p className="font-semibold">{day.date}</p>
									<p className="text-sm text-gray-600">{day.orders} orders</p>
								</div>
								<span className="text-lg font-semibold text-green-500">
									{day.total}
								</span>
							</div>
						))}
					</ScrollArea>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-white border-t border-gray-200 p-4">
				<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
					<DollarSign className="h-5 w-5 mr-2" />
					Cash Out
				</Button>
			</footer>
		</div>
	)
}
