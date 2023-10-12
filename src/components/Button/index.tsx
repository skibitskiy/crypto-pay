import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export enum ButtonSize {
  BIG = 'BIG',
  MEDIUM = 'MEDIUM',
}

export enum ButtonTheme {
  GENERAL = 'GENERAL',
  SECONDARY = 'SECONDARY',
  OUTLINED = 'OUTLINED',

}

export interface IButtonProps {
  className?: string
  letValue: string
  letTheme: ButtonTheme
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    className, letValue, letTheme,
  } = props;

  return (
    <button
      className={
        classNames(
          className,
          styles.button,
          {
            [styles.button_theme_general]: letTheme === ButtonTheme.GENERAL,
            [styles.button_theme_secondary]: letTheme === ButtonTheme.SECONDARY,
            [styles.button_theme_outlined]: letTheme === ButtonTheme.OUTLINED,
          },
        )
    }
      type="button"
    >
      <span className={styles.buttonContent}>
        {letValue}
      </span>
    </button>
  );
};
