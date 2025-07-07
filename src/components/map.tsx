import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useGeoLocation } from '../hooks/use-geo-location'

// Use string paths instead of require for Vite
L.Icon.Default.mergeOptions({
	iconRetinaUrl: '/node_modules/leaflet/dist/images/marker-icon-2x.png',
	iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
	shadowUrl: '/node_modules/leaflet/dist/images/marker-shadow.png',
})

export default function Map() {
	const { location } = useGeoLocation()

	// set a initial location for only one time

	const map = useRef<L.Map | null>(null)
	const initLocation = useRef(location)

	useEffect(() => {
		if (location && !initLocation.current) {
			initLocation.current = location
		}
	}, [location])

	useEffect(() => {
		if (!initLocation.current) return

		map.current = L.map('map', {
			center: L.latLng(
				initLocation.current.latitude,
				initLocation.current.longitude,
			),
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
				crossOrigin: true,
			},
		).addTo(map.current)

		return () => {
			map.current?.remove()
		}
	}, [location])

	useEffect(() => {
		if (!location || !map.current) return

		L.marker([location.latitude, location.longitude])
			.addTo(map.current)
			.openPopup()
	}, [location])

	return <div id="map" className="w-full h-full" />
}
