import { render, screen } from '@testing-library/react';
import { NotificationElement } from './NotificationElement';
import { v4 as uuidv4 } from 'uuid';
import { Notification, NotificationType } from '@types';

test('renders learn react link', () => {
    const notification: Notification = {
        id:  uuidv4(),
        content: "Test notification",
        type: NotificationType.Success
    }
  render(<NotificationElement notification={notification} />);
  const contentElement = screen.getByText(/Test notification/i);
  expect(contentElement).toBeInTheDocument();
});
