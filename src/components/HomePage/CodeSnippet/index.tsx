import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';

export interface ICodeSnippetProps extends React.PropsWithChildren {
  className?: string;
  isPart?: boolean
}

export const CodeSnippet: React.FC<ICodeSnippetProps> = ({ children, className, isPart }) => {
  return (
    <div className={classNames(styles.container, className, { [styles.container_part]: isPart })}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
