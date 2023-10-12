import React from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/components/Button';

import classNames from 'classnames';
import { Typography, TypographyStyle } from '@/components/Typography';
import styles from './styles.module.css';
import { HorizontalMenu, IHorizontalMenuProps } from '../HorizontalMenu';
import { BlockLayout } from '../BlockLayout';

interface IFooterProps {
  className?: string
}

const menuItems: IHorizontalMenuProps['items'] = [
  { name: 'Use cases', url: '' },
  { name: 'Features', url: '' },
  { name: 'How to start', url: '' },
];

export const Footer: React.FC<IFooterProps> = ({ className }) => {
  return (
    <div className={styles.backgroundContainer}>
      <BlockLayout className={styles.layout}>
        <footer className={classNames(styles.container, className)}>
          <img
            className={styles.image}
            src="/logo-256.png"
            alt="Crypto Pay logo"
            width={64}
            height={64}
          />

          <nav className={styles.menuContainer}>
            <HorizontalMenu className={styles.menu} items={menuItems} />
          </nav>
          <Button className={styles.button} letSize={ButtonSize.BIG} letTheme={ButtonTheme.OUTLINED} letValue="Get started" />
        </footer>
        <Typography
          className={styles.copyright}
          style={TypographyStyle.button}
        >
          ©2023 Crypto Bot
        </Typography>
      </BlockLayout>
    </div>
  );
};
