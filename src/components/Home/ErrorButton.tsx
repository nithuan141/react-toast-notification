import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"

import styles from './Home.module.scss'

export const ErrorButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("This is a sample error notification", NotificationType.Error)

    return <button onClick={notify} className={styles.button}>I am an error toast</button>
}