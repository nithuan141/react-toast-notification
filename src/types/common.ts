export enum NotificationType {
    Info,
    Warning,
    Error,
    Success
}

export type Notification = {
    content: string
    type: NotificationType
    id: number
    timeout?: number
    callback?: Function
}