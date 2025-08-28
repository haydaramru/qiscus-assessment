import { Card } from "@/components/ui/card";
import React from "react";

const RoomChatFallback = () => {
    return (
        <Card className="hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary text-secondary-foreground rounded-none">
            Select/start to get started
        </Card>
    )
}

export default RoomChatFallback
