import React from 'react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FileText } from 'lucide-react'

type Props = {
    fromCurrentUser: boolean
    senderImage: string
    senderName: string
    lastByUser: boolean
    content?: string
    mediaUrl?: string
    filename?: string
    createdAt: number
    type: 'text' | 'image' | 'video' | 'pdf'
}

const Message = ({ fromCurrentUser, senderImage, senderName, lastByUser, content, createdAt, type, mediaUrl, filename }: Props) => {
    const formatTime = (timestamp: number) => format(timestamp, 'HH:mm')
    
    return (
        <div className={cn('flex items-end', { 'justify-end': fromCurrentUser })}>
            <div className={cn('flex flex-col w-full mx-2', { 'order-1 items-end': fromCurrentUser, 'order-2 items-start': !fromCurrentUser })}>
                <div className='max-w-[75%]'>
                    <div
                        className={cn('px-3 py-2 rounded-2xl', {
                            'bg-primary text-primary-foreground': fromCurrentUser,
                            'bg-secondary text-secondary-foreground': !fromCurrentUser,
                            'rounded-br-none': !lastByUser && fromCurrentUser,
                            'rounded-bl-none': !lastByUser && !fromCurrentUser,
                        })}
                    >
                        {type === 'text' && (
                            <p className='text-wrap break-words whitespace-pre-wrap'>{content}</p>
                        )}
                        {type === 'image' && mediaUrl && (
                            <a href={mediaUrl} target='_blank' rel='noreferrer'>
                                <img src={mediaUrl} alt={content || 'image'} className='rounded-md max-h-64 object-cover' />
                            </a>
                        )}
                        {type === 'video' && mediaUrl && (
                            <video className='rounded-md max-h-64' controls>
                                <source src={mediaUrl} />
                            </video>
                        )}
                        {type === 'pdf' && mediaUrl && (
                            <a href={mediaUrl} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 underline'>
                                <FileText className='h-4 w-4' />
                                {filename || 'Open PDF'}
                            </a>
                        )}
                        {type !== 'text' && content ? (
                            <p className='mt-2 text-sm opacity-90'>{content}</p>
                        ) : null}
                        <p className={cn('text-xs flex w-full mt-1', { 'text-primary-foreground justify-end': fromCurrentUser, 'text-secondary-foreground justify-start': !fromCurrentUser })}>
                            {formatTime(createdAt)}
                        </p>
                    </div>
                </div>
            </div>

            <Avatar className={cn('relative size-10', { 'order-2': fromCurrentUser, 'order-1': !fromCurrentUser, invisible: lastByUser })}>
                <AvatarImage src={senderImage} />
                <AvatarFallback>{senderName.substring(0, 1)}</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Message
