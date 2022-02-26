import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"

import styles from './Home.module.scss'

export const InfoButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("This is a sample info notification", NotificationType.Info, 2000)

    return <button onClick={notify} className={styles.button}>I am an info toast</button>
}