import { useEffect, useState } from 'react'

export const useGeoLocation = () => {
	const [location, setLocation] = useState<GeolocationCoordinates | null>(null)
	const [error, setError] = useState<string | null>(null)
	console.log({ location, error })

	useEffect(() => {
		// Check if we're on the client side
		if (typeof window === 'undefined') {
			return
		}

		if (!navigator.geolocation) {
			setError('Geolocation is not supported by your browser')
			return
		}

		const success = (position: GeolocationPosition) => {
			console.log('useGeoLocation success', position)
			setLocation(position.coords)
			setError(null)
		}

		const error = (err: GeolocationPositionError) => {
			setError(err.message)
			setLocation(null)
		}

		const watchId = navigator.geolocation.watchPosition(success, error)

		return () => navigator.geolocation.clearWatch(watchId)
	}, [])

	return { location, error }
}
