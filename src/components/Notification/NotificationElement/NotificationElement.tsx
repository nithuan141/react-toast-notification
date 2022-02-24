import { FC } from "react"
import styles from './NotificationElement.module.scss'

type NotificationElementProps = {
    content: string | Element
}

export const NotificationElement: FC<NotificationElementProps> = (props: NotificationElementProps) => {
    const { content } = props
    return <div className={styles.notificationElement}>
        {content}
    </div>
}