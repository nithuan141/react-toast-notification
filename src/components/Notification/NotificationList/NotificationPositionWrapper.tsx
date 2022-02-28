import { FC } from "react";
import groupBy from "lodash/groupBy";
import { Notification, NotificationPosition, NotificationType } from "@/types";
import { useNotification } from "@contexts/Notifications.context";
import { NotificationList } from "./NotificationList";

export type NotificationPositionProps = {
  children: JSX.Element | Array<JSX.Element>;
};

export const NotificationPositionWrapper: FC<NotificationPositionProps> = ({
  children,
}) => {
  const { notifications } = useNotification();

  const notificationPositions = groupBy(
    notifications,
    (item: Notification) => item.position
  );

  const NotificationLists = Object.keys(notificationPositions).map(
    (position) => {
      return (
        <NotificationList
          notifications={notificationPositions[position]}
          position={Number(position) as NotificationPosition}
          key={`notification-container-${position}`}
        />
      );
    }
  );

  return (
    <>
      {NotificationLists}
      {children}
    </>
  );
};
