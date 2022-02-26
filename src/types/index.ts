import { NotificationPosition, NotificationType } from './common'

export type Notification = {
    id: string
    content: string
    type: NotificationType
    position?: NotificationPosition
    timeout?: number
    callback?: Function
}

export {
    NotificationType,
    NotificationPosition
} from './common'