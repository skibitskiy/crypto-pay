import React from 'react';
import classNames from 'classnames';

import { Typography, TypographyStyle } from '@/components/Typography';
import styles from './styles.module.css';

export interface ICardProps extends React.PropsWithChildren {
  className?: string
  title: string;
  description: string;
}

export const Card: React.FC<ICardProps> = ({
  className, children, title, description,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
      <div>
        <Typography className={styles.title} style={TypographyStyle.h3}>{title}</Typography>
        <Typography className={styles.description} style={TypographyStyle['base-text']}>{description}</Typography>
      </div>
    </div>
  );
};
