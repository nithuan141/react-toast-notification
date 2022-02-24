import { FC } from "react"
import { useNotifications } from "../../../hooks"
import { NotificationElement } from "../NotificationElement/NotificationElement"

import styles from './NotificationContainer.module.scss'

export const NotificationContainer: FC = () => {
    const { notifications } = useNotifications()

    return <div className={styles.notification}>
        {notifications?.map(note => <NotificationElement key={note} content={note}/>)}
    </div>
}