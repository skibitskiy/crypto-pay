import React from 'react';

import classNames from 'classnames';
import { Typography, TypographyStyle } from '@/components/Typography';
import { Card, ICardProps } from '../Card';

import styles from './styles.module.css';
import { i18n } from './i18n';

interface ICurrenciesCardProps extends Pick<ICardProps, 'className'> {}

const CURRENCIES = [
  { name: 'ETH', icon: 'ETH' },
  { name: 'USDT', icon: 'USDT' },
  { name: 'TON', icon: 'TON' },
  { name: 'BTC', icon: 'BTC' },
  { name: 'TRX', icon: 'TRX' },
  { name: 'LTC', icon: 'LTC' },
  { name: 'USDC', icon: 'USDC' },
  { name: 'BNB', icon: 'BNB' },
];

export const CurrenciesCard: React.FC<ICurrenciesCardProps> = ({ className }) => {
  return (
    <Card
      className={classNames(className, styles.container)}
      title={i18n('title')}
      description={i18n('description')}
    >
      <div className={styles.currenciesContainer}>
        {CURRENCIES.map(({ icon, name }) => {
          return (
            <div key={name} className={styles.currencyContainer}>
              <img className={styles.icon} src={`/${icon}.svg`} alt={name} />
              <Typography
                className={styles.currencyName}
                style={TypographyStyle.description}
              >
                {name}
              </Typography>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
