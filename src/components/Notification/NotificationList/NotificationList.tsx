import { FC } from "react";
import classNames from "classnames";
import { Notification, NotificationPosition } from "@/types";
import { NotificationElement } from "../NotificationElement/NotificationElement";

import styles from "./NotificationList.module.scss";

type NotificationListProps = {
  notifications: Notification[] | undefined;
  position: NotificationPosition;
};

export const NotificationList: FC<NotificationListProps> = ({
  notifications,
  position,
}) => {
  return (
    <div
      className={classNames(styles.notification, {
        [styles.topRight]: position === NotificationPosition.TopRight,
        [styles.topLeft]: position === NotificationPosition.TopLeft,
        [styles.bottomRight]: position === NotificationPosition.BottomRight,
        [styles.bottomLeft]: position === NotificationPosition.BottomLeft,
      })}
    >
      {notifications?.map((notification) => (
        <NotificationElement
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
};
