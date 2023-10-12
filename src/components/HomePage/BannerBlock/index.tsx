import React from 'react';
import { CryptoPayAPIBanner } from './CryptoPayAPIBanner';
import { BlockLayout } from '../BlockLayout';

import styles from './styles.module.css';

export const BannerBlock: React.FC = () => {
  return (
    <BlockLayout className={styles.layout}>
      <CryptoPayAPIBanner className={styles.banner} />
    </BlockLayout>
  );
};
