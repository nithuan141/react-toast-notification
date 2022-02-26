import { FC } from "react"
import { Button, ButtonType } from "@components/Shared"
import { useNotification } from "@contexts/Notifications.context"
import { NotificationType } from "@types"

import styles from './Home.module.scss'

type InfoButtonProps = {
    timer?: number,
    callback?: Function
}

export const InfoButton: FC<InfoButtonProps> = ({ timer, callback }) => {
    const { addNotification } = useNotification()

    const notify = () => addNotification?.("Info", "This is a sample info notification", NotificationType.Info, timer, callback)

    return <Button onClick={notify} className={styles.button} type={ButtonType.Secondary}>
        {`I am an info toast ${timer ? 'with auto hide' : ''} ${callback ? 'and callback' : ''}`}
    </Button>
}