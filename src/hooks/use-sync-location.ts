import { useSocket } from '../contexts/socket'
import { useEffect } from 'react'
import { useGeoLocation } from './use-geo-location'
import { Websocket } from '../services/socket'

const socket = Websocket.getInstance()

export const useSyncLocation = () => {
	const { isConnected } = useSocket()
	const { location } = useGeoLocation()

	useEffect(() => {
		console.log('pushhhh')
		if (isConnected && location) {
			socket.emit('driver-location', {
				id: '123',
				latitude: location.latitude,
				longitude: location.longitude,
			})
		}
	}, [isConnected, location])
}
