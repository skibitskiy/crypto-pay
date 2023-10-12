import React from 'react';

import classNames from 'classnames';
import { Theme, useThemeContext } from '@/lib/themeContext';
import styles from './styles.module.css';

export const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="switch theme"
      className={classNames(
        styles.container,
        { [styles.light]: theme === Theme.LIGHT, [styles.dark]: theme === Theme.DARK },
      )}
      onClick={toggleTheme}
    />
  );
};
