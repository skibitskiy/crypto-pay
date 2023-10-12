import React from 'react';

import { Button, ButtonTheme } from '@/components/Button';

import { Typography, TypographyStyle } from '@/components/Typography';
import styles from './styles.module.css';
import { i18n } from './i18n';

interface IUseCaseDescriptionProps {
  description: string;
  proposal: string;
  solution: string;
}

export const UseCaseDescription: React.FC<IUseCaseDescriptionProps> = (props) => {
  const { description, proposal, solution } = props;

  return (
    <div>
      <Typography style={TypographyStyle.h2} className={styles.title}>
        <span className={styles.proposal}>
          {proposal}
          :
        </span>
        <br />
        {solution}
      </Typography>
      <Typography
        style={TypographyStyle['base-text']}
        className={styles.description}
      >
        {description}
      </Typography>
      <Button letTheme={ButtonTheme.GENERAL} letValue={i18n('buttonText')} />
    </div>
  );
};
