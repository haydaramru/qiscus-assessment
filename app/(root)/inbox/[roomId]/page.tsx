"use client"

import RoomChatContainer from "@/components/shared/room-chat/RoomChatContainer";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React, { useState } from "react";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";

type Props = {
    params: {
        roomId: string
    }
}

const RoomChatPage = ({params: {roomId}}: Props) => {
    // TODO: Fetch from data/chat_response.json using axios
    const inbox = 'Do something'

    return (
        inbox === undefined ? 
        <div className="w-full h-full flex items-center justify-center">
            <Spinner/>
        </div> :
        inbox === null ? <p className="w-full h-full flex items-center justify-center">
            Inbox not found
        </p> : 
        <RoomChatContainer>
            <Header
                name={ inbox.room.participant[2].name || ""} 
                imageUrl={ inbox.room.imageUrl }
                options={[
                    { label: 'Remove client', destructive: true, onClick: () => {} }
                ]}
            />
            <Body />
            <ChatInput />
        </RoomChatContainer>
    )
}

export default RoomChatPage
