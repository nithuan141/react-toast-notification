import { FC } from "react"
import { Button, ButtonType } from "@components/Shared"
import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"

import styles from './Home.module.scss'

type InfoButtonProps = {
    timer?: number,
}

export const InfoButton: FC<InfoButtonProps> = ({ timer }) => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("Info", "This is a sample info notification", NotificationType.Info, timer)

    return <Button onClick={notify} className={styles.button} type={ButtonType.Secondary}>
        {`I am an info toast ${timer ? 'with auto hide' : ''}`}
    </Button>
}