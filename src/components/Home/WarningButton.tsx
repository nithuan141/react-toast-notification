import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"
import { Button, ButtonType } from "@components/Shared"

import styles from './Home.module.scss'

export const WarningButton = () => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("Warning", "This is a sample warning notification", NotificationType.Warning)

    return <Button onClick={notify} className={styles.button} type={ButtonType.Warning}>
        I am a warning toast
    </Button>
}