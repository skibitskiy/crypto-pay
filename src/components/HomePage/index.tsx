'use client';

import React from 'react';

import { ThemeContext } from '@/lib/themeContext';
import { StartBlock } from './StartBlock';
import { UseCasesBlock } from './UseCasesBlock';
import { FeaturesBlock } from './FeaturesBlock';

import styles from './styles.module.css';
import { QuickStartBlock } from './QuickStartBlock';
import { BannerBlock } from './BannerBlock';
import { DevelopersBlock } from './DevelopersBlock';
import { Footer } from './Footer';

export const HomePage = () => {
  return (
    <ThemeContext>
      <StartBlock />
      <UseCasesBlock />
      <FeaturesBlock />
      <QuickStartBlock />
      <BannerBlock />
      <DevelopersBlock className={styles.developerBlock} />
      <Footer />
    </ThemeContext>
  );
};
