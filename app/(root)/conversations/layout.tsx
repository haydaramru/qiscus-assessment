import ItemList from "@/components/shared/item-list/itemList";
import React from "react";

type Props = React.PropsWithChildren<{}>

const ConversationsLayout = ({ children }: Props) => {
    return (
        <>
        <ItemList title="Conversations">Conversation Page</ItemList>
        {children}
        </>
    )
}

export default ConversationsLayout
