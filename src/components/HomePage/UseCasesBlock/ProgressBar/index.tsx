import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

interface IProgressBarProps {
  className?: string;
  count: number;
  current: number;
}

const makeTwoDigit = (n: number) => {
  return n > 9 ? n : `0${n}`;
};

export const ProgressBar: React.FC<IProgressBarProps> = ({ className, current, count }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.digit}>{makeTwoDigit(current + 1)}</div>
      <div className={styles.linesContainer}>
        {Array(count).fill(null).map((_, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.line, { [styles.activeLine]: index === current })}
            />
          );
        })}
      </div>
      <div className={styles.digit}>{makeTwoDigit(count)}</div>
    </div>
  );
};
