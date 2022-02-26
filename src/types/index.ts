import { NotificationPosition, NotificationType } from './common'

export type Notification = {
    id: string
    title: string | JSX.Element
    content: string | JSX.Element
    type: NotificationType
    position?: NotificationPosition
    timeout?: number
    callback?: Function
}

export {
    NotificationType,
    NotificationPosition
} from './common'