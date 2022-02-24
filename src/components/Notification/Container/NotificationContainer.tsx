import { FC } from "react"
import { NotificationProvider } from "../../../context/Notifications.context"
import { Notifications } from "./Notifications"

export type NotificationContainerProps = {
    children: JSX.Element | Array<JSX.Element>
}

export const NotificationContainer: FC<NotificationContainerProps> = ({ children }) => (
    <NotificationProvider>
        <>
            <Notifications />
            {children}
        </>
    </NotificationProvider>
)