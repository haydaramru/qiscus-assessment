import { useParams } from "next/navigation"
import { useMemo } from "react"

export const useRoomChat = () => {
    const params = useParams()

    const roomId = useMemo(() => params?.roomId || ("" as string), [params?.roomId])

    const isActive = useMemo(() => !!roomId, [roomId])

    return {
        isActive, roomId
    }
}
