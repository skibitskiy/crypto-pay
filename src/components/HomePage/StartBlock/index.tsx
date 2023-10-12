import React from 'react';
import { Button, ButtonTheme } from '@/components/Button';

import { Typography, TypographyStyle } from '@/components/Typography';
import { useThemeContext } from '@/lib/themeContext';
import styles from './styles.module.css';
import { BlockLayout } from '../BlockLayout';
import { Header } from '../Header';
import { i18n } from './i18n';

const AVATARS_NAMES = ['avatar-duck', 'avatar-alien', 'avatar-star', 'avatar-animal', 'avatar-borz'];

export const StartBlock = () => {
  const { theme } = useThemeContext();

  return (
    <BlockLayout className={styles.container} alignItems="center">
      <Header className={styles.header} />
      <div className={styles.bannerDescriptionContainer}>
        <Typography style={TypographyStyle.h1} className={styles.title}>
          {i18n('title')}
        </Typography>
        <Typography style={TypographyStyle['base-text']} className={styles.description}>
          {i18n('description')}
        </Typography>
        <Button className={styles.button} letTheme={ButtonTheme.GENERAL} letValue={i18n('buttonText')} />
        <div className={styles.avatarsContainers}>
          {AVATARS_NAMES.map((name) => {
            return (
              <div className={styles.avatarContainer}>
                <img
                  key={name}
                  className={styles.avatar}
                  src={`/${name}.png`}
                  width={88}
                  height={88}
                  alt="seller's avatar"
                />
              </div>
            );
          })}
        </div>
        <Typography className={styles.subDescription} style={TypographyStyle['base-text']}>
          {i18n('subDescription')}
        </Typography>
      </div>
      <img
        className={styles.telegramPreview}
        src={`/crypto-pay-iphone-${theme.toLowerCase()}-2x.png`}
        width={336}
        height={693}
        alt="Crypto Bot withing Telegram app"
      />
    </BlockLayout>
  );
};
