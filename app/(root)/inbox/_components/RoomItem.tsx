import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    roomId: string
    imageUrl: string
    name: string
    lastMessageSender: string
    lastMessageContent: string
}

const RoomItem = ({roomId, imageUrl, name, lastMessageContent, lastMessageSender}: Props) => {
    const isYou = lastMessageSender === 'agent@mail.com'
    return (
        <Link href={`/inbox/${roomId}`} className="block w-full">
            <Card className='w-full p-4 flex flex-row items-center gap-3 rounded-none border-0 border-b'>
                <div className='flex flex-row items-center gap-3 w-full'>
                    <Avatar className='shrink-0 size-10'>
                        <AvatarImage src={imageUrl}/>
                        <AvatarFallback>
                            <User />
                        </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col min-w-0 flex-1'>
                        <div className='truncate text-lg font-semibold'>{name}</div>
                        <div className='flex items-baseline gap-1 text-md text-muted-foreground min-w-0'>
                            {isYou ? (
                                <span className='shrink-0 font-semibold'>You:</span>
                            ) : null}
                            <span className='truncate min-w-0 flex-1'>{lastMessageContent}</span>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default RoomItem
