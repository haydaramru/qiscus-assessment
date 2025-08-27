"use client"

import ItemList from "@/components/shared/item-list/itemList";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React from "react";
import DMConversationItem from "./_components/DMConversationItem";

type Props = React.PropsWithChildren<{}>

const ConversationsLayout = ({ children }: Props) => {
    // Fetch from json
    const conversations = fetch()

    return (
        <>
        <ItemList title="Conversations">
            {conversations ? ( 
                conversations.length === 0 ? (
                <p className="w-full h-full flex items-center justify-center">
                    No conversations found
                </p>
            ) : conversations.map(conversations => {
                return conversations.conversation.isGroup ? null : <DMConversationItem key={conversations.conversation.id} id={conversations.conversation.id} username={conversations.otherMember?.username || ""} imageUrl={conversations.otherMember?.imageUrl || ""}/>
            })
            ) : <Spinner/>}
        </ItemList>
        {children}
        </>
    )
}

export default ConversationsLayout
