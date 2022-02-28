import { FC } from "react";
import { useNotification } from "@contexts/Notifications.context";
import { NotificationType } from "@types";
import { Button, ButtonType } from "@components/Shared";

import styles from "./Home.module.scss";

export const ErrorButton: FC = () => {
  const { addNotification } = useNotification();

  const notify = () =>
    // A sample error toast with an html markup in content.
    addNotification?.(
      "Action Item",
      <span>
        {"This is a sample error notification with "}
        <strong>HTML markup</strong>
      </span>,
      NotificationType.Error
    );

  return (
    <Button onClick={notify} className={styles.button} type={ButtonType.Error}>
      I am an error toast
    </Button>
  );
};
