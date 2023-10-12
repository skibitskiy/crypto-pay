import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';

interface IСonsequenceArrowProps {
  className?: string;
}

export const СonsequenceArrow: React.FC<IСonsequenceArrowProps> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <img src="/dotted-arrow.svg" alt="arrow" />
    </div>
  );
};
