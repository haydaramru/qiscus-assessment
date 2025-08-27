"use client"

import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React from "react";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";

type Props = {
    params: {
        conversationId: string
    }
}

const ConversationPage = ({params: {conversationId}}: Props) => {
    // Fetch here
    const conversation = fetch()

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
                imageUrl={conversation.isGroup ? undefined : conversation.otherMember.imageUrl }/>
            <Body />
            <ChatInput />
        </ConversationContainer>
    )
}

export default ConversationPage
