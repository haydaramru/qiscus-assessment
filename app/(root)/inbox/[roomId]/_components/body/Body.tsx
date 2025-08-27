"use client"

import { useRoomChat } from '@/hooks/useRoomChat'
import React from 'react'
import Message from './Message'

type Props = {}

const Body = (props: Props) => {
    const {roomId} = useRoomChat()

    // TODO: Use from data/chat_response.json using axios
    const comments = 'DO SOMETHING'

    return (
        <div className='flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p-3 no-scrollbar'>
            {comments?.map(({comments, senderImage, senderName, isCurrentUser}, index) => {
                const lastByUser = comments[index - 1]?.message.senderId === comments.[index].message.senderId

                return <Message 
                            key={comments._id} 
                            fromCurrentUser={isCurrentUser} 
                            senderImage={senderImage} 
                            senderName={senderName} 
                            lastByUser={lastByUser} 
                            content={comments.content}
                            createdAt={comments._creationTime}
                            type={comments.type}
                        />
            })}
        </div>
    )
}

export default Body
