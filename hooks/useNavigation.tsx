import { MessagesSquare } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export const useNavigation = () => {
    const pathname = usePathname()

    const paths = useMemo(() => [
        {
            name: "Inbox",
            href: "/inbox",
            icon: <MessagesSquare />,
            active: pathname.startsWith("/inbox")
        },
    ], [pathname])

    return paths
}
