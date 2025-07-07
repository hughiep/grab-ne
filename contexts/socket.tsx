'use client'

import { Websocket } from '@/services/socket'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface SocketContext {
	isConnected: boolean
}

const socketContext = createContext<SocketContext | null>(null)
const socket = Websocket.getInstance()

export default function Socket({ children }: { children: React.ReactNode }) {
	const [isConnected, setIsConnected] = useState(false)

	useEffect(() => {
		// Only run on client side
		if (typeof window === 'undefined') {
			return
		}

		socket.connect()

		return () => {
			socket.close()
		}
	}, [])

	useEffect(() => {
		// Only run on client side
		if (typeof window === 'undefined') {
			return
		}

		const onConnect = () => {
			setIsConnected(true)
		}

		const onDisconnect = () => {
			setIsConnected(false)
		}

		socket.on('connect', onConnect)
		socket.on('disconnect', onDisconnect)

		return () => {
			socket.off('connect', onConnect)
			socket.off('disconnect', onDisconnect)
		}
	}, [])

	const value = useMemo(() => ({ isConnected }), [isConnected])

	return (
		<socketContext.Provider value={value}>{children}</socketContext.Provider>
	)
}

export function useSocket() {
	const context = useContext(socketContext)
	if (!context) {
		throw new Error('useSocket must be used within a SocketProvider')
	}

	return context
}
