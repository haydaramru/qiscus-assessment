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
  return (
    <Link href={`/inbox/${roomId}`} className="full">
        <Card className='p-2 flex flex-row items-center gap-4 truncate'>
            <div className='flex flex-row items-center gap-4 truncate'>
                <Avatar>
                    <AvatarImage src={imageUrl}/>
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                </Avatar>
                <div className='flex flex-col truncate'>
                    <h4 className='truncate'>{name}</h4>
                    <span className='text-sm text-muted-foreground truncate overflow-ellipsis'>
                        <p className='font-semibold'>{lastMessageSender}{':'}&nbsp;</p>
                        <p className='truncate overflow-ellipsis'>{lastMessageContent}</p>
                    </span>
                </div>
            </div>
        </Card>
    </Link>
  )
}

export default RoomItem
