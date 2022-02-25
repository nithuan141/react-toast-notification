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
    content: string
    type: NotificationType
    id: number
    position?: NotificationPosition
    timeout?: number
    callback?: Function
}