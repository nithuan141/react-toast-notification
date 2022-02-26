import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"

import styles from './Home.module.scss'

export const WarningButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("This is a sample warning notification", NotificationType.Warning)

    return <button onClick={notify} className={styles.button}>I am a warning toast</button>
}