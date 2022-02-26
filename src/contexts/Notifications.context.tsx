import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Notification, NotificationType } from '@types'

export type NotificationProps = {
	notifications: Array<Notification>
	addNotification: (title: string, content: string, type: NotificationType, timeout?: number, callback?: Function) => void
	removeNotification: (id: string) => void
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

	const nextId = () => uuidv4()

	const addNotification = (
		title: string, 
		content: string, 
		type: NotificationType, 
		timeout?: number, 
		callback?: Function) => {
		const notification: Notification = {
			id: nextId(),
			title,
			content,
			type,
			timeout,
			callback
		}
		setNotifications([...notifications, notification])
	}

	const removeNotification = (id: string) => setNotifications(notifications.filter((x: Notification) => x.id !== id))

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
