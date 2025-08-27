"use client"

import ItemList from "@/components/shared/customer-list/customerList";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React, { useEffect, useState } from "react";
import RoomItem from "./_components/RoomItem";
import axios from "axios";
import { ChatItem } from "@/lib/types";

type Props = React.PropsWithChildren<{}>

const InboxLayout = ({ children }: Props) => {
    const [inbox, setInbox] = useState<ChatItem[] | null | undefined>(undefined)

    useEffect(() => {
        let mounted = true
        axios
            .get<ChatItem[]>(`/api/chat`)
            .then((res) => {
                if (!mounted) return
                setInbox(res.data)
            })
            .catch(() => {
                if (!mounted) return
                setInbox(null)
            })
        return () => {
            mounted = false
        }
    }, [])

    return (
        <>
        <ItemList title="Inbox">
            {inbox === undefined ? (
                <Spinner variant="bars" />
            ) : inbox === null ? (
                <p className="w-full h-full flex items-center justify-center">Failed to load inbox</p>
            ) : inbox.length === 0 ? (
                <p className="w-full h-full flex items-center justify-center">No inbox found</p>
            ) : (
                inbox.map((item) => {
                    const last = item.comments[item.comments.length - 1]
                    const customer = item.room.participant.find((p) => p.role === 2)
                    const preview = (() => {
                        if (!last) return ''
                        if (last.type === 'text') return last.message
                        if (last.type === 'image') return '[Image]' + (last.caption ? ` ${last.caption}` : '')
                        if (last.type === 'video') return '[Video]' + (last.caption ? ` ${last.caption}` : '')
                        if (last.type === 'pdf') return `[PDF] ${last.filename}`
                        return ''
                    })()
                    return (
                        <RoomItem
                            key={item.room.id}
                            roomId={String(item.room.id)}
                            name={customer?.name || ""}
                            imageUrl={item.room.image_url || ""}
                            lastMessageContent={preview}
                            lastMessageSender={last?.sender || ""}
                        />
                    )
                })
            )}
        </ItemList>
        {children}
        </>
    )
}

export default InboxLayout
