import { FC } from "react"
import classNames from "classnames"
import { useNotification } from "../../../context/Notifications.context"
import { Notification, NotificationType } from "../../../types/common"

import styles from './NotificationElement.module.scss'

type NotificationElementProps = {
    notification: Notification
}

export const NotificationElement: FC<NotificationElementProps> = ({ notification }) => {
    const { content, id, type, timeout } = notification
    const { removeNotification } = useNotification()

    const onRemoveNotification = () => removeNotification?.(id)

    // Auto remove if there is a timeout has set
    timeout && setTimeout(() => {
        removeNotification?.(id)
    }, timeout)

    return <>
        <div className={classNames(styles.notificationElement, {
            [styles.success]: type === NotificationType.Success,
            [styles.warning]: type === NotificationType.Warning,
            [styles.info]: type === NotificationType.Info,
            [styles.error]: type === NotificationType.Error
        })
        }>
            <button className={styles.removeButton} onClick={onRemoveNotification}>X</button>
            {content}
        </div>
       
    </>
}