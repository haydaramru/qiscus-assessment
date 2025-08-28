"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useRoomChat } from "@/hooks/useRoomChat"
import { useNavigation } from "@/hooks/useNavigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const MobileNav = () => {
    const paths = useNavigation()

    const { isActive } = useRoomChat()

    if (isActive) return null

    return (
        <Card className="fixed bottom-0 left-0 right-0 w-full flex items-center h-16 px-4 py-2 lg:hidden rounded-none border-0 bg-primary text-primary-foreground shadow-md pb-[env(safe-area-inset-bottom)]">
            <nav className="w-full">
                <ul className="flex justify-evenly items-center gap-2">
                    {
                        paths.map((path, id) => {
                            return <li key={id} className="relative">
                                <Link href={path.href}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className={cn(
                                                    path.active
                                                        ? "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/25"
                                                        : "text-primary-foreground hover:bg-primary-foreground/10"
                                                )}
                                            >
                                                {path.icon}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{path.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Link>
                            </li>
                        })
                    }
                    <li>
                        <ThemeToggle
                            buttonVariant="ghost"
                            buttonClassName="text-primary-foreground hover:bg-primary-foreground/10"
                        />
                    </li>
                </ul>
            </nav>
        </Card>
    )
}

export default MobileNav
