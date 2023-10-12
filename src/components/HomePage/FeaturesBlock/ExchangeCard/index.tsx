import React from 'react';
import { AnimatedCurrencies } from './AnimatedCurrencies';

import { Card, ICardProps } from '../Card';

import styles from './styles.module.css';
import { i18n } from './i18n';

interface IExchangeCardProps extends Pick<ICardProps, 'className'> {}

export const ExchangeCard: React.FC<IExchangeCardProps> = ({ className }) => {
  return (
    <Card
      className={className}
      title={i18n('title')}
      description={i18n('description')}
    >
      <div className={styles.currenciesContainer}>
        <div className={styles.currenciesInnerContainer}>
          <AnimatedCurrencies />
        </div>
      </div>
    </Card>
  );
};
