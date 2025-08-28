import { Card } from "@/components/ui/card";
import React from "react";

type Props = React.PropsWithChildren<{}>

const RoomChatContainer = ({children}: Props) => {
    return (
        <Card className="w-full h-full p-0 flex flex-col gap-0 rounded-none">
            {children}
        </Card>
    )
}

export default RoomChatContainer
