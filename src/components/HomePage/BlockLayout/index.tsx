import React, { CSSProperties, PropsWithChildren } from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';

interface IBlockLayoutProps extends PropsWithChildren {
  className?: string;
  alignItems?: CSSProperties['alignItems'];
}

export const BlockLayout: React.FC<IBlockLayoutProps> = ({ children, className, alignItems }) => {
  return (
    <div
      className={classNames(styles.container, className)}
      style={{ alignItems }}
    >
      {children}
    </div>
  );
};
