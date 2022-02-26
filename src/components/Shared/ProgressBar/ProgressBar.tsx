import { FC, useEffect, useState } from 'react';

import styles from './ProgressBar.module.scss'

type ProgressBarProps = {
  timer: number
}

const ProgressBar: FC<ProgressBarProps> = ({ timer }) => {
  const [countdown, setCountdown] = useState(1)

  useEffect(() => {
    setCountdown(timer)
    setInterval(() => setCountdown(countdown - 2), 2)
    return () => clearInterval()
  }, [timer])

  return (
    <div className={styles.container}>
      <div className={styles.filler} style={{ width: `${Math.floor((countdown / timer) * 100)}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;