"use client"

import { Card } from "@/components/ui/card";
import { useRoomChat } from "@/hooks/useRoomChat";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.PropsWithChildren<{
    title: string
    action?: React.ReactNode
}>

const ItemList = ({ children, title, action: Action }: Props) => {
    const {isActive} = useRoomChat()

    return (
        <Card
            className={cn(
                "hidden h-full w-full lg:flex-none lg:w-md p-0 rounded-none",
                {
                    "block": !isActive,
                    "lg:block": isActive,
                }
            )}
        >
            <div className="flex items-center justify-between px-3 py-2 bg-primary/50 border-b">
                <h1 className="text-2xl p-2 font-semibold tracking-tight">{title}</h1>
                {Action ? Action : null}
            </div>
            <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col items-stretch justify-start pb-16 lg:pb-0">
                {children}
            </div>
        </Card>
    )
}

export default ItemList
