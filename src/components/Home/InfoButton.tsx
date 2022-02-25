import { useNotification } from "../../context/Notifications.context"
import { NotificationType } from "../../types/common"

import styles from './Home.module.scss'

export const InfoButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("This is a sample info notification", NotificationType.Info)

    return <button onClick={notify} className={styles.button}>I am an info toast</button>
}