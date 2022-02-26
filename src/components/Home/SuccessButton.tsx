import { Button } from "@components/Shared"
import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"

import styles from './Home.module.scss'

export const SuccessButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("Success", "This is a sample success notification", NotificationType.Success)

    return <Button onClick={notify} className={styles.button}>I am a success toast</Button>
}