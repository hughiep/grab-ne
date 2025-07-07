import { io, Socket } from 'socket.io-client'

export class Websocket {
	socket: Socket

	private constructor() {
		this.socket = io(import.meta.env.VITE_API_BASE_URL, {
			autoConnect: false,
			transports: ['websocket'],
		})
	}

	// Singleton
	static instance: Websocket | null = null

	static getInstance() {
		if (!Websocket.instance) {
			Websocket.instance = new Websocket()
		}

		return Websocket.instance
	}

	on(event: string, callback: (...args: any[]) => void) {
		this.socket.on(event, callback)
	}

	emit(event: string, data: any) {
		this.socket.emit(event, data)
	}

	off(event: string, callback: (...args: any[]) => void) {
		this.socket.off(event, callback)
	}

	close() {
		this.socket.close()
	}

	connect() {
		this.socket.connect()
	}

	disconnect() {
		this.socket.disconnect()
	}
}
