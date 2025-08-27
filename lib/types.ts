export type Participant = {
    id: string
    name: string
    role: number // 0: admin, 1: agent, 2: customer
}

export type Room = {
	id: number
	name: string
	image_url: string
	participant: Participant[]
}

export type Comment = {
	id: number
	type: 'text'
	message: string
	sender: string
}

export type ChatItem = {
	room: Room
	comments: Comment[]
}

export type ChatListResponse = ChatItem[]
export type ChatRoomResponse = ChatItem
