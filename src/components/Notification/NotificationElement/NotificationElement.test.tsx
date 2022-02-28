import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import { Notification, NotificationPosition, NotificationType } from "@types";
import { NotificationElement } from "./NotificationElement";

test("verifies the notification renders", () => {
  const notification: Notification = {
    id: uuidv4(),
    title: "Test Title",
    content: "Test notification",
    type: NotificationType.Success,
    position: NotificationPosition.TopRight,
  };

  const dom = render(<NotificationElement notification={notification} />);
  expect(dom).not.toBeNull();

  const contentElement = screen.getByText(/Test notification/i);
  expect(contentElement).toBeInTheDocument();

  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});
