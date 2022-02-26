import { FC } from "react"
import { useNotification } from "@contexts/Notifications.context"
import { NotificationElement } from "../NotificationElement/NotificationElement"

import styles from './NotificationList.module.scss'

export const NotificationList: FC = () => {
    const { notifications } = useNotification()

    return <div className={styles.notification}>
        {notifications?.reverse().map(notification => <NotificationElement key={notification.id} notification={notification} />)}
    </div>
}

