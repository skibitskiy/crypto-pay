import React from 'react';

import { Typography, TypographyStyle } from '@/components/Typography';
import { Button, ButtonTheme } from '@/components/Button';
import { BlockLayout } from '../BlockLayout';
import { SDKList } from './SDKList';

import styles from './styles.module.css';
import { i18n } from './i18n';

interface IDevelopersBlockProps {
  className?: string;
}

export const DevelopersBlock: React.FC<IDevelopersBlockProps> = ({ className }) => {
  return (
    <div className={className}>
      <BlockLayout className={styles.layout}>
        <div className={styles.presentation}>
          <Typography className={styles.title} style={TypographyStyle.h2}>
            {i18n('title')}
          </Typography>
          <Typography className={styles.description} style={TypographyStyle['base-text']}>
            {i18n('description')}
          </Typography>
        </div>
        <div className={styles.sdkListContainer}>
          <SDKList />
        </div>
        <Button letTheme={ButtonTheme.GENERAL} letValue={i18n('buttonText')} />
      </BlockLayout>
    </div>
  );
};
