import { FC } from "react";
import { NotificationProvider } from "@contexts/Notifications.context";
import { NotificationList } from "./NotificationList/NotificationList";

export type NotificationContainerProps = {
  children: JSX.Element | Array<JSX.Element>;
};

export const NotificationContainer: FC<NotificationContainerProps> = ({
  children,
}) => (
  <NotificationProvider>
    <>
      <NotificationList />
      {children}
    </>
  </NotificationProvider>
);
