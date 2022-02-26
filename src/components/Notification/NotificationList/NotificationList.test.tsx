import { render } from '@testing-library/react';
import { NotificationList } from './NotificationList';

test('verifies the notification list is rendering ', () => {
  const dom = render(<NotificationList />);
  expect(dom).not.toBeNull();
});
