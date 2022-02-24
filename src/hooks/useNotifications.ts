type NotificationsReturnType = {
    notifications: Array<string>
    add: (val: string) => {}
}

export const useNotifications = () : NotificationsReturnType => {
    const notifications = ["Notificy 1"]

    const add = (content: string) => notifications.push(content)

    return {
        notifications,
        add
    }
}