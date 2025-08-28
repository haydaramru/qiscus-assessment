import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronLeft, CircleArrowLeft, EllipsisVertical } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    imageUrl?: string
    name: string
    options?: {
        label: string
        destructive: boolean
        onClick: () => void
    }[]
}

const Header = ({imageUrl, name, options}: Props) => {
    return (
        <Card className='w-full flex flex-row items-center justify-between p-3 bg-transparent rounded-none'>
            <div className='flex items-center gap-2'>
                <Link href='/inbox' className='block'>
                    <ChevronLeft className='h-5 w-5' />
                </Link>
                <Avatar className='size-10'>
                    <AvatarImage src={imageUrl}/>
                    <AvatarFallback>
                        {name.substring(0,1)}
                    </AvatarFallback>
                </Avatar>
                <div className='font-semibold text-lg'>{name}</div>
            </div>
            <div className='flex gap-2'>
                {options ? 
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button size='icon' variant='ghost'>
                                <EllipsisVertical />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {options.map((option, id) => {
                                return (
                                    <DropdownMenuItem key={id} onClick={option.onClick} className={cn('font-semibold', {
                                        'text-destructive': option.destructive
                                    })}>
                                        {option.label}
                                    </DropdownMenuItem>
                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu> : null}
            </div>
        </Card>
    )
}

export default Header
