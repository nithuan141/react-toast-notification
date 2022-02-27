import { FC } from "react";
import { NotificationProvider } from "@contexts/Notifications.context";
import { NotificationPositionWrapper } from "./NotificationList/NotificationPositionWrapper";

export type NotificationContainerProps = {
  children: JSX.Element | Array<JSX.Element>;
};

export const NotificationContainer: FC<NotificationContainerProps> = ({
  children,
}) => (
  <NotificationProvider>
    <NotificationPositionWrapper>{children}</NotificationPositionWrapper>
  </NotificationProvider>
);
