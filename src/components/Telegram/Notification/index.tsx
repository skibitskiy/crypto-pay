import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';

interface INotificationProps {
  title: string;
  message: React.ReactNode
  userPicSrc: string
  isContentHidden?: boolean
}

export const Notification: React.FC<INotificationProps> = ({
  message, title, userPicSrc, isContentHidden,
}) => {
  return (
    <div className={styles.container}>
      <div className={classNames(
        styles.innerContainer,
        { [styles.innerContainer_hidden]: isContentHidden },
      )}
      >
        <div className={styles.userPicContainer}>
          <img alt="user pic" src={userPicSrc} width={40} height={40} />
          <img alt="telegram logo" className={styles.telegramLogo} src="/telegram_logo_18.png" width={18} height={18} />
        </div>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.message}>{message}</div>
        </div>
        <div className={styles.nowLabel}>
          now
        </div>
      </div>
    </div>
  );
};
