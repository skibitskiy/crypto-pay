import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';

interface IUseCaseProps {
  className: string;
  renderContent: () => React.ReactNode
}

export const UseCaseCard: React.FC<IUseCaseProps> = ({ className, renderContent }) => {
  return (
    <div className={classNames(styles.card, className)}>
      {renderContent()}
    </div>
  );
};
