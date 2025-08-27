"use client"

import React, { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useConversation } from '@/hooks/useConversation'
import TextareaAutosize from 'react-textarea-autosize'
import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'

const ChatInput = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const {conversationId} = useConversation()

    const handleInputChange = (event: any) => {
        const {value, selectionStart} = event.target

        if (selectionStart !== null) {
            form.setValue('content', value)
        }
    }

    const handleSubmit = 'DO SOMETHING'

    return (
        <Card className='w-full p-2 rounded-lg relative'>
            <div className='flex gap-2 items-end w-full'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className='flex gap-2 items-end w-full'>
                        <FormField control={form.control} name='content' render={({field}) => {
                            return <FormItem className='h-full w-full'>
                                <FormControl>
                                    <TextareaAutosize 
                                        onKeyDown={
                                            async e => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault()
                                                    await form.handleSubmit(handleSubmit)()
                                                }
                                            }
                                        }
                                        rows={1} 
                                        maxRows={3} 
                                        {...field} 
                                        onChange={handleInputChange} 
                                        onClick={handleInputChange} 
                                        placeholder='Type a message...'
                                        className='min-h-full w-full resize-none border-0 outline-0 bg-card text-card-foreground placeholder:text-muted-foreground p-1.5'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                        />
                        <Button disabled={pending} size={'icon'} type='submit'>
                            <SendHorizonal />
                        </Button>
                    </form>
                </Form>
            </div>
        </Card>
    )
}

export default ChatInput
