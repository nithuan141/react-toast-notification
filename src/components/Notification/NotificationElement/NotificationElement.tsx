import classNames from "classnames"
import { FC } from "react"
import { useNotification } from "../../../context/Notifications.context"
import { Notification, NotificationType } from "../../../types/common"
import styles from './NotificationElement.module.scss'

type NotificationElementProps = {
    notification: Notification
}

export const NotificationElement: FC<NotificationElementProps> = ({ notification }) => {
    const { content, id, type } = notification
    const { removeNotification } = useNotification()

    const onRemoveNotification = () => removeNotification?.(id)

    return <div className={classNames(styles.notificationElement, {
        [styles.success]: type === NotificationType.Success,
        [styles.warning]: type === NotificationType.Warning,
        [styles.info]: type === NotificationType.Info,
        [styles.error]: type === NotificationType.Error
    })
    }>
        <button onClick={onRemoveNotification}>X</button>
        {content}
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