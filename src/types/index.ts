import { NotificationPosition, NotificationType } from "./common";

export type Notification = {
  id: string;
  title: string | JSX.Element | Element;
  content: string | JSX.Element | Element;
  type: NotificationType;
  position: NotificationPosition;
  timeout?: number;
  callback?: () => void | unknown;
};

export { NotificationType, NotificationPosition } from "./common";
