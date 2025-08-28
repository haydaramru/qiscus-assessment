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
    const baseTime = useMemo(() => Date.now() + ordered.length * 60_000, [ordered.length])

    return (
        <div className='flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p-3 no-scrollbar'>
            {ordered.map((comment, index) => {
                const prev = ordered[index - 1]
                const sender = participants.find((p) => p.id === comment.sender)
                const isAgent = sender?.role === 1
                const lastByUser = prev ? prev.sender === comment.sender : false
                const createdAt = baseTime - index * 60_000

                const extraProps = (() => {
                    if (comment.type === 'text') return { content: (comment as any).message as string }
                    if (comment.type === 'image') return { mediaUrl: (comment as any).url as string, content: (comment as any).caption as string | undefined }
                    if (comment.type === 'video') return { mediaUrl: (comment as any).url as string, content: (comment as any).caption as string | undefined }
                    if (comment.type === 'pdf') return { mediaUrl: (comment as any).url as string, filename: (comment as any).filename as string }
                    return {}
                })()

                return (
                    <Message
                        key={comment.id}
                        fromCurrentUser={!!isAgent}
                        senderImage={''}
                        senderName={sender?.name || comment.sender}
                        lastByUser={lastByUser}
                        createdAt={createdAt}
                        type={comment.type as any}
                        {...extraProps}
                    />
                )
            })}
        </div>
    )
}

export default Body
