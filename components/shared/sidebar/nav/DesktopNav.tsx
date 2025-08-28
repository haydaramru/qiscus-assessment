"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { useNavigation } from "@/hooks/useNavigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const DesktopNav = () => {
    const paths = useNavigation()

    return (
        <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4 rounded-none bg-primary text-primary-foreground border-0">
            <nav>
                <ul className="flex flex-col items-center gap-4">
                    {
                        paths.map((path, id) => {
                            return <li key={id} className="relative">
                                <Link href={path.href}>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className={cn(
                                            path.active 
                                            ? "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/25 hover:text-primary-foreground"
                                            : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                                        )}
                                    >
                                        {path.icon}
                                    </Button>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </nav>
            <div className="flex flex-col items-center gap-4">
                <ThemeToggle
                    buttonVariant="ghost"
                    buttonClassName="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" 
                />
            </div>
        </Card>
    )
}

export default DesktopNav
