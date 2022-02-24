import React from 'react'
import { Notification, NotificationType } from '../types/common'

export type NotificationProps = {
	notifications: Array<Notification>
	addNotification: (content: string, type: NotificationType, timeout?: number, callback?: Function) => void
	removeNotification: (id: number) => void
}

export type NotificationProviderProps = {
	children: JSX.Element
}

const initialState = {
	notifications: []
}

export const NotificationContext = React.createContext<Partial<NotificationProps>>(initialState)

const useNotification = (): Partial<NotificationProps> => React.useContext(NotificationContext)

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
	const [notifications, setNotifications] = React.useState<Array<Notification>>([])

	const nextId = () => (notifications[notifications.length - 1]?.id || 0) + 1

	const addNotification = (content: string, type: NotificationType, timeout?: number, callback?: Function) => {
		const notification: Notification = {
			id: nextId(),
			content,
			type,
			timeout,
			callback
		}
		setNotifications([...notifications, notification])
	}

	const removeNotification = (id: number) => setNotifications(notifications.filter((x: Notification) => x.id !== id))

	return (
		<NotificationContext.Provider
			value={{
				notifications,
				addNotification,
				removeNotification
			}}
		>
			{children}
		</NotificationContext.Provider>
	)
}

export { useNotification, NotificationProvider }
