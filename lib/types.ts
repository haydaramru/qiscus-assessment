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

export type CommentBase = {
	id: number
	sender: string
}

export type CommentText = CommentBase & {
	type: 'text'
	message: string
}

export type CommentImage = CommentBase & {
	type: 'image'
	url: string
	caption?: string
}

export type CommentVideo = CommentBase & {
	type: 'video'
	url: string
	caption?: string
}

export type CommentPdf = CommentBase & {
	type: 'pdf'
	url: string
	filename: string
}

export type Comment = CommentText | CommentImage | CommentVideo | CommentPdf

export type ChatItem = {
	room: Room
	comments: Comment[]
}

export type ChatListResponse = ChatItem[]
export type ChatRoomResponse = ChatItem
