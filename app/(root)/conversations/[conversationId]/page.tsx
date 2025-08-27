"use client"

import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React, { useState } from "react";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";

type Props = {
    params: {
        conversationId: string
    }
}

const ConversationPage = ({params: {conversationId}}: Props) => {
    // TODO: Fetch from json data
    const conversation = fetch()

    const [removeFriendDialogOpen, setRemoveFriendDialogOpen] = useState(false)
    const [deleteGroupDialogOpen, setDeleteGroupDialogOpen] = useState(false)
    const [leaveGroupDialogOpen, setLeaveGroupDialogOpen] = useState(false)
    const [callType, setCallTypeDialogOpen] = useState<'audio' | 'video' | null>(null)
    
    return (
        conversation === undefined ? 
        <div className="w-full h-full flex items-center justify-center">
            <Spinner/>
        </div> :
        conversation === null ? <p className="w-full h-full flex items-center justify-center">
            Conversation not found
        </p> : 
        <ConversationContainer>
            <Header
                name={(conversation.isGroup ? conversation.name : conversation.otherMember.username) || ""} 
                imageUrl={conversation.isGroup ? undefined : conversation.otherMember.imageUrl }
                options={conversation.isGroup ? [
                    { label: 'Leave Group', destructive: false, onClick: () => setLeaveGroupDialogOpen(true) }
                    { label: 'Delete Group', destructive: true, onClick: () => setDeleteGroupDialogOpen(true) }
                ] : [
                    { label: 'Remove friend', destructive: true, onClick: () => setRemoveFriendDialogOpen(true) }
                ]}
            />
            <Body />
            <ChatInput />
        </ConversationContainer>
    )
}

export default ConversationPage
