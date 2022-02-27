import { FC } from "react";
import { useNotification } from "@contexts/Notifications.context";
import { NotificationType } from "@types";
import { Button, ButtonType } from "@components/Shared";

import styles from "./Home.module.scss";

export const ErrorButton: FC = () => {
  const { addNotification } = useNotification();

  const notify = () =>
    addNotification?.(
      "Action Item",
      "This is a sample error notification",
      NotificationType.Error
    );

  return (
    <Button onClick={notify} className={styles.button} type={ButtonType.Error}>
      I am an error toast
    </Button>
  );
};
