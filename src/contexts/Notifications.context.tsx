import React, { useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Notification, NotificationPosition, NotificationType } from "@types";

export type NotificationProps = {
  notifications: Notification[];
  addNotification: (
    title: string,
    content: string,
    type: NotificationType,
    position?: NotificationPosition,
    timeout?: number,
    callback?: () => void | unknown
  ) => void;
  removeNotification: (id: string) => void;
};

export type NotificationProviderProps = {
  children: JSX.Element | JSX.Element[] | undefined;
};

const initialState = {
  notifications: [],
};

export const NotificationContext =
  React.createContext<Partial<NotificationProps>>(initialState);

const useNotification = (): Partial<NotificationProps> =>
  React.useContext(NotificationContext);

const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = React.useState<Array<Notification>>(
    []
  );

  const nextId = () => uuidv4();

  const add = (
    title: string,
    content: string,
    type: NotificationType,
    position?: NotificationPosition,
    timeout?: number,
    callback?: () => void | unknown
  ) => {
    const notification: Notification = {
      id: nextId(),
      title,
      content,
      type,
      timeout,
      callback,
      position: position || NotificationPosition.TopRight,
    };
    setNotifications([...notifications, notification]);
  };

  const remove = (id: string) => {
    const notification = notifications.find((x: Notification) => x.id === id);
    setNotifications(notifications.filter((x: Notification) => x.id !== id));
    // Triggering call back on remove if there is one.
    if (notification?.callback) {
      notification.callback?.();
    }
  };

  const removeNotification = useCallback(remove, [notifications]);
  const addNotification = useCallback(add, [notifications]);

  const contextValue = useMemo(() => {
    return {
      notifications,
      addNotification,
      removeNotification,
    };
  }, [notifications, addNotification, removeNotification]);

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export { useNotification, NotificationProvider };
