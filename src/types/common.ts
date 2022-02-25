export enum NotificationType {
    Info,
    Warning,
    Error,
    Success
}

export enum NotificationPosition {
    TopLeft,
    TopCenter,
    TopRight
}

export type Notification = {
    id: string
    content: string
    type: NotificationType
    position?: NotificationPosition
    timeout?: number
    callback?: Function
}