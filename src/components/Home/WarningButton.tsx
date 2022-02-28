import { FC } from "react";
import { useNotification } from "@contexts/Notifications.context";
import { NotificationPosition, NotificationType } from "@types";
import { Button, ButtonType } from "@components/Shared";

import styles from "./Home.module.scss";

type WarningButton = {
  callback?: () => void;
};

export const WarningButton: FC<WarningButton> = ({ callback }) => {
  const { addNotification } = useNotification();

  const notify = () =>
    addNotification?.(
      "Warning",
      "This is a sample warning notification showing on bottom left position",
      NotificationType.Warning,
      NotificationPosition.BottomLeft,
      undefined,
      callback
    );

  return (
    <Button
      onClick={notify}
      className={styles.button}
      type={ButtonType.Warning}
    >
      {`I am a warning toast ${callback ? "with hide callback" : ""}`}
    </Button>
  );
};
