import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export interface IInlineButtonProps {
  className?: string;
  letName: React.ReactNode;
  renderExtra?: () => React.ReactNode
  isLast?: boolean;
  isActive?: boolean;
}

export const InlineButton: React.FC<IInlineButtonProps> = ({
  className, letName, isLast, renderExtra, isActive,
}) => {
  return (
    <div className={
      classNames(
        styles.container,
        className,
        {
          [styles.last]: isLast,
          [styles.active]: isActive,
        },
      )
    }
    >
      <span className={styles.content}>
        <span className={styles.dot}>· </span>
        {letName}
        <span className={styles.dot}> ·</span>
      </span>
      {renderExtra?.()}
    </div>
  );
};
