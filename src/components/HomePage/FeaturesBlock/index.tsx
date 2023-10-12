import React from 'react';
import classNames from 'classnames';

import { BlockLayout } from '../BlockLayout';
import { CurrenciesCard } from './CurrenciesCard';

import styles from './styles.module.css';
import { CreateAppCard } from './CreateAppCard';
import { ExchangeCard } from './ExchangeCard';
import { StatsCard } from './StatsCard';
import { AutoPaymentsCard } from './AutoPaymentsCard';
import { AnonymousPaymentsCard } from './AnonymousPaymentsCard';

export const FeaturesBlock = () => {
  return (
    <BlockLayout className={styles.container}>
      <CurrenciesCard className={classNames(styles.card, styles.currenciesCard)} />
      <CreateAppCard className={classNames(styles.card, styles.createAppCard)} />
      <StatsCard className={classNames(styles.card, styles.statsCard)} />
      <ExchangeCard className={classNames(styles.card, styles.createAppCard)} />
      <AutoPaymentsCard className={classNames(styles.card, styles.autoPaymentCard)} />
      <AnonymousPaymentsCard className={classNames(styles.card, styles.anonymousPaymentsCard)} />
    </BlockLayout>
  );
};
