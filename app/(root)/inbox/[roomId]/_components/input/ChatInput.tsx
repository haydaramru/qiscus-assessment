"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import TextareaAutosize from 'react-textarea-autosize'
import { Button } from '@/components/ui/button'
import { Paperclip, SendHorizonal } from 'lucide-react'
import { Input } from '@/components/ui/input'

const ChatInput = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [content, setContent] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [toast, setToast] = useState<{ message: string; show: boolean }>({ message: "", show: false })
    const canSend = content.trim().length > 0 && !submitting

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!content.trim()) return
        setSubmitting(true)
        // Static/no-op: simulate send then clear
        setTimeout(() => {
        setContent("")
        setSubmitting(false)
        setToast({ message: 'Message sent (static)', show: true })
        textareaRef.current?.focus()
        }, 200)
    }

    useEffect(() => {
        if (!toast.show) return
        const t = setTimeout(() => setToast((cur) => ({ ...cur, show: false })), 1800)
        return () => clearTimeout(t)
    }, [toast.show])

    const handleAttachClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const files = e.target.files
        if (files && files.length > 0) {
        setToast({ message: `${files.length} file(s) attached (static)`, show: true })
        // Reset input so selecting the same file again triggers change
        e.currentTarget.value = ''
        }
    }

    return (
        <div className='p-3 bg-transparent'>
            <Card className='w-full p-1 rounded-full relative'>
                <form onSubmit={handleSubmit} className='flex items-center w-full'>
                    <Button size='icon' type='button' variant='ghost' aria-label='Attach file' onClick={handleAttachClick} className='shrink-0'>
                        <Paperclip className='h-5 w-5' />
                    </Button>
                    <Input ref={fileInputRef} type='file' className='hidden' onChange={handleFileChange} />
                    <TextareaAutosize
                        ref={textareaRef}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onKeyDown={async (e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            await handleSubmit()
                            }
                        }}
                        rows={1}
                        maxRows={3}
                        placeholder='Send a message...'
                        className='
                            flex-1 min-h-[36px] w-full resize-none
                            bg-transparent p-2 text-sm placeholder:text-muted-foreground
                            outline-none border-0
                        '
                    />
                    <Button disabled={!canSend} size='icon' type='submit' aria-label='Send message' className='shrink-0'>
                        <SendHorizonal className='h-5 w-5' />
                    </Button>
                </form>
                {toast.show ? (
                    <div
                        role='status'
                        className='
                            pointer-events-none absolute -top-10 right-2 select-none
                            rounded-md bg-secondary text-secondary-foreground shadow px-3 py-1 text-sm
                        '
                    >
                        {toast.message}
                    </div>
                ) : null}
            </Card>
        </div>
    )
}

export default ChatInput
