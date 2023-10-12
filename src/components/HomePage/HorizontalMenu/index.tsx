import React from 'react';

import { Typography, TypographyStyle, TypographyTag } from '@/components/Typography';
import classNames from 'classnames';

import styles from './styles.module.css';

export interface IHorizontalMenuProps {
  className?: string
  items: { name: string, url: string }[]
}

export const HorizontalMenu: React.FC<IHorizontalMenuProps> = ({ items, className }) => {
  return (
    <ul className={classNames(styles.listContainer, className)}>
      {items.map(({ name }) => {
        return (
          <Typography
            style={TypographyStyle.button}
            tag={TypographyTag.li}
            key={name}
          >
            <span tabIndex={0} className={styles.button} role="button">{name}</span>
          </Typography>
        );
      })}
    </ul>
  );
};
