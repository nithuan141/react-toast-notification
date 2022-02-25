import { useNotification } from "../../context/Notifications.context"
import { NotificationType } from "../../types/common"

import styles from './Home.module.scss'

export const SuccessButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("This is a sample success notification", NotificationType.Success)

    return <button onClick={notify} className={styles.button}>I am a success toast</button>
}