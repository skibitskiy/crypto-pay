import React from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/components/Button';

import classNames from 'classnames';
import { Theme, useThemeContext } from '@/lib/themeContext';
import styles from './styles.module.css';
import { HorizontalMenu, IHorizontalMenuProps } from '../HorizontalMenu';
import { ThemeButton } from './ThemeButton';

interface IHeaderProps {
  className?: string
}

const headerItems: IHorizontalMenuProps['items'] = [
  { name: 'Use cases', url: '' },
  { name: 'Features', url: '' },
  { name: 'How to start', url: '' },

];

export const Header: React.FC<IHeaderProps> = ({ className }) => {
  const { theme } = useThemeContext();

  return (
    <header className={classNames(styles.container, className)}>
      <img
        className={styles.image}
        src="/logo-256.png"
        alt="Crypto Pay logo"
        width={64}
        height={64}
      />
      <nav className={styles.menuContainer}>
        <HorizontalMenu items={headerItems} />
      </nav>
      <div className={styles.buttons}>
        <ThemeButton />
        <Button
          letSize={ButtonSize.BIG}
          letTheme={theme === Theme.LIGHT ? ButtonTheme.SECONDARY : ButtonTheme.OUTLINED}
          letValue="Get started"
        />
      </div>
    </header>
  );
};
