import fs from 'fs/promises'
import path from 'path'

type Participant = {
    id: string
    name: string
    role: number
}

type Room = {
	id: number
	name: string
	image_url: string
	participant: Participant[]
}

type Comment = {
	id: number
	type: 'text'
	message: string
	sender: string
}

type ChatItem = {
	room: Room
	comments: Comment[]
}

type ChatResponse = {
	results: ChatItem[]
}

export async function GET(req: Request) {
	try {
		const filePath = path.join(process.cwd(), 'data', 'chat_response.json')
		const raw = await fs.readFile(filePath, 'utf-8')
		const data = JSON.parse(raw) as ChatResponse

		const url = new URL(req.url)
		const roomId = url.searchParams.get('roomId')

		if (roomId) {
			const idNum = Number(roomId)
			const item = data.results.find((r) => r.room.id === idNum)
			if (!item) {
				return new Response(JSON.stringify({ message: 'Room not found' }), {
					status: 404,
					headers: { 'content-type': 'application/json' },
				})
			}
			return new Response(JSON.stringify(item), {
				status: 200,
				headers: { 'content-type': 'application/json' },
			})
		}

		return new Response(JSON.stringify(data.results), {
			status: 200,
			headers: { 'content-type': 'application/json' },
		})
	} catch (err) {
		return new Response(JSON.stringify({ message: 'Failed to load data' }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		})
	}
}

