import { v4 as uuidv4 } from "uuid";
import { render } from "@testing-library/react";
import { Notification, NotificationPosition, NotificationType } from "@/types";
import { NotificationList } from "./NotificationList";

test("verifies the notification list is rendering ", () => {
  const notifications: Notification[] = [
    {
      id: uuidv4(),
      title: "Test Title",
      content: "Test notification",
      type: NotificationType.Success,
      position: NotificationPosition.TopRight,
    },
  ];

  const dom = render(
    <NotificationList
      notifications={notifications}
      position={NotificationPosition.TopRight}
    />
  );
  expect(dom).not.toBeNull();
});
