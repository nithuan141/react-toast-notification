import { FC, useEffect } from "react"
import classNames from "classnames"
import { useNotification } from "@contexts/Notifications.context"
import { Notification, NotificationType } from "@types"
import {
    CloseIcon,
    InfoIcon,
    TickIcon,
    ErrorIcon,
    WarningIcon
} from "@components/Shared/Icons"

import styles from './NotificationElement.module.scss'

type NotificationElementProps = {
    notification: Notification
}

export const NotificationElement: FC<NotificationElementProps> = ({ notification }) => {
    const { content, id, type, timeout, title = '' } = notification
    const { removeNotification } = useNotification()

    const onRemoveNotification = () => removeNotification?.(id)

    useEffect(() => {
        // Auto hide if there is a timer value .
        timeout && setTimeout(() => {
            removeNotification?.(id)
        }, timeout)
    })

    return <div className={classNames(styles.notificationElement, {
        [styles.success]: type === NotificationType.Success,
        [styles.warning]: type === NotificationType.Warning,
        [styles.info]: type === NotificationType.Info,
        [styles.error]: type === NotificationType.Error
    })
    }>
        <button className={styles.close} onClick={onRemoveNotification}>
            <CloseIcon />
        </button>
        <div className={styles.leftArea}>
            {getNotificationIcon(type)}
        </div>
        <div className={styles.rightArea}>
            <h3 className={styles.head}>{title}</h3>
            <p className={styles.content}>{content}</p>
        </div>
    </div>
}

const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
        case NotificationType.Success:
            return <TickIcon fill={'#54947C'} />
        case NotificationType.Info:
            return <InfoIcon fill={'#5B8496'} />
        case NotificationType.Error:
            return <ErrorIcon fill='#A0676E' />
        case NotificationType.Warning:
            return <WarningIcon fill='#997C42' />
    }
}