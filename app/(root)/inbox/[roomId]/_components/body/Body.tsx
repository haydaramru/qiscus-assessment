"use client"

import React, { useMemo } from 'react'
import Message from './Message'
import { Comment, Participant } from '@/lib/types'

type Props = {
    comments: Comment[]
    participants: Participant[]
}

const Body = ({ comments, participants }: Props) => {
    const ordered = useMemo(() => [...comments].reverse(), [comments])
    const baseTime = useMemo(() => Date.now() - ordered.length * 60_000, [ordered.length])

    return (
        <div className='flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p-3 no-scrollbar'>
            {ordered.map((comment, index) => {
                const prev = ordered[index - 1]
                const sender = participants.find((p) => p.id === comment.sender)
                const isAgent = sender?.role === 1
                const lastByUser = prev ? prev.sender === comment.sender : false
                const createdAt = baseTime - index * 60_000

                return (
                <Message
                    key={comment.id}
                    fromCurrentUser={!!isAgent}
                    senderImage={''}
                    senderName={sender?.name || comment.sender}
                    lastByUser={lastByUser}
                    content={comment.message}
                    createdAt={createdAt}
                    type={comment.type}
                />
                )
            })}
        </div>
    )
}

export default Body
