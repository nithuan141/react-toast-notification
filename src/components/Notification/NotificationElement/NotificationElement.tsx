import { FC } from "react"
import { Notification } from "../../../types/common"
import styles from './NotificationElement.module.scss'

type NotificationElementProps = {
    notification: Notification
}

export const NotificationElement: FC<NotificationElementProps> = ({ notification }) => {
    const { content } = notification
    return <div className={styles.notificationElement}>
        {content}
    </div>
}