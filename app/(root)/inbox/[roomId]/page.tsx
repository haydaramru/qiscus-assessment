"use client"

import RoomChatContainer from "@/components/shared/room-chat/RoomChatContainer";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";
import axios from "axios";
import { ChatItem } from "@/lib/types";

const RoomChatPage = () => {
    const router = useRouter()
    const { roomId } = useParams<{ roomId: string }>()
    const [inbox, setInbox] = useState<ChatItem | null | undefined>(undefined)

    useEffect(() => {
        let mounted = true
        if (!roomId) return
        axios
            .get<ChatItem>(`/api/chat`, { params: { roomId } })
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
    }, [roomId])

    return (
        inbox === undefined ? (
            <div className="w-full h-full flex items-center justify-center">
                <Spinner variant="bars" />
            </div>
        ) : inbox === null ? (
            <p className="w-full h-full flex items-center justify-center">Inbox not found</p>
        ) : (
            <RoomChatContainer>
                <Header
                    name={inbox.room.participant.find((p) => p.role === 2)?.name || ""}
                    imageUrl={inbox.room.image_url}
                    options={[{ label: 'Close chat', destructive: true, onClick: () => router.push('/inbox') }]}
                />
                <Body comments={inbox.comments} participants={inbox.room.participant} />
                <ChatInput />
            </RoomChatContainer>
        )
    )
}

export default RoomChatPage
