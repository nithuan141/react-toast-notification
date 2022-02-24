import { useNotification } from "../../context/Notifications.context"
import { NotificationType } from "../../types/common"

export const SuccessButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("This is a sample notification", NotificationType.Success)

    return <button onClick={notify}>I am a success toast</button>
}