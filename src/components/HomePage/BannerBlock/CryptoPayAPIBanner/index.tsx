import React from 'react';
import classNames from 'classnames';
import { Typography, TypographyStyle } from '@/components/Typography';
import { Button, ButtonTheme } from '@/components/Button';
import styles from './styles.module.css';

import { i18n } from './i18n';

interface ICryptoPayAPIBannerProps {
  className?: string;
}

export const CryptoPayAPIBanner: React.FC<ICryptoPayAPIBannerProps> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.info}>
        <Typography className={styles.title} style={TypographyStyle.h2}>Crypto Pay API</Typography>
        <Typography className={styles.description} style={TypographyStyle['base-text']}>{i18n('description')}</Typography>
        <Button letTheme={ButtonTheme.OUTLINED} letValue={i18n('buttonText')} />
      </div>
      <div className={styles.backgroundImage} />
    </div>
  );
};
