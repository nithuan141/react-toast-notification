import { FC } from "react"
import { useNotification } from "../../../context/Notifications.context"
import { NotificationElement } from "../NotificationElement/NotificationElement"

import styles from './NotificationContainer.module.scss'

export const Notifications: FC = () => {
    const { notifications } = useNotification()

    return <div className={styles.notification}>
        {notifications?.map(notification => <NotificationElement key={notification.id} notification={notification} />)}
    </div>
}

// const placements = {
//     'top-left': { top: 0, left: 0 },
//     'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
//     'top-right': { top: 0, right: 0 },
//     'bottom-left': { bottom: 0, left: 0 },
//     'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
//     'bottom-right': { bottom: 0, right: 0 },
//   };
