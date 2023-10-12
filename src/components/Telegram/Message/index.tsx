import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export interface IMessageProps {
  className?: string;
  hours: number;
  minutes: number
  text: React.ReactNode
  withTail?: boolean
  isPart?: boolean
  isContentHidden?: boolean
}

export const Message: React.FC<IMessageProps> = ({
  className, hours, minutes, text, withTail, isPart, isContentHidden,
}) => {
  return (
    <div className={
      classNames(styles.container, className, { [styles.container_part]: isPart })
    }
    >
      <span className={classNames(styles.content, { [styles.content_hidden]: isContentHidden })}>
        <p className={styles.text}>{text}</p>
        <span className={styles.time}>{`${hours}:${minutes}`}</span>
      </span>
      {withTail && <img className={styles.tail} alt="tail" src="/message-tail.svg" />}
    </div>
  );
};
