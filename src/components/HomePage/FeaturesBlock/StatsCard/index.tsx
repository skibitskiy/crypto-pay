import React from 'react';

import { Card, ICardProps } from '../Card';

import styles from './styles.module.css';
import { StatsCardMessage } from './StatsCardMessage';
import { i18n } from './i18n';

interface IStatsCardProps extends Pick<ICardProps, 'className'> {}

export const StatsCard: React.FC<IStatsCardProps> = ({ className }) => {
  return (
    <Card title={i18n('title')} description={i18n('description')} className={className}>
      <div className={styles.messageContainer}>
        <StatsCardMessage className={styles.message} />
      </div>
    </Card>
  );
};
