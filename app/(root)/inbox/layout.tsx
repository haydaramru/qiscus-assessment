"use client"

import ItemList from "@/components/shared/customer-list/customerList";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import React from "react";
import RoomItem from "./_components/RoomItem";

type Props = React.PropsWithChildren<{}>

const InboxLayout = ({ children }: Props) => {
    // TODO: Fetch from data/chat_response.json using axios
    const inbox = 'Do something'

    return (
        <>
        <ItemList title="Inbox">
            {inbox ? ( 
                inbox.length === 0 ? (
                <p className="w-full h-full flex items-center justify-center">
                    No inbox found
                </p>
            ) : inbox.map(inbox => {
                return (
                    <RoomItem 
                        key={inbox.room.id} 
                        roomId={inbox.room.id} 
                        name={inbox.room.participant[2].name || ""} 
                        imageUrl={inbox.room.imageUrl || ""}
                        lastMessageContent={inbox.comments[inbox.comments.length - 1].message}
                        lastMessageSender={inbox.comments[inbox.comments.length - 1].sender}
                    />
                )
            })
            ) : <Spinner/>}
        </ItemList>
        {children}
        </>
    )
}

export default InboxLayout
