import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';
import { i18n } from './i18n';

interface ICreateAppButtonProps {
  className?: string
  isActive?: boolean
}

export const CreateAppButton: React.FC<ICreateAppButtonProps> = ({ className, isActive }) => {
  return (
    <div className={classNames(styles.container, className, [{ [styles.active]: isActive }])}>
      <span className={styles.text}>
        {i18n('buttonText')}
      </span>
    </div>
  );
};
