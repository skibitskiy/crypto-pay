import React from 'react';
import { Typography, TypographyStyle, TypographyTag } from '@/components/Typography';
import classNames from 'classnames';

import styles from './styles.module.css';

interface IStepProps {
  className?: string;
  index: number;
  title: string;
  description?: string;
  subSteps: string[]
  ordered?: boolean
}

export const Step: React.FC<IStepProps> = ({
  className, index, subSteps, title, description, ordered,
}) => {
  const ListElement = ordered ? 'ol' : 'ul';

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.index}>{index}</div>
      <div>
        <Typography className={styles.title} style={TypographyStyle.h3}>{title}</Typography>
        {description && <Typography className={styles.description} style={TypographyStyle['base-text']}>{description}</Typography>}
        <ListElement className={classNames(styles.subSteps, { [styles.orderedList]: ordered })}>
          {subSteps.map((content) => {
            return (
              <Typography
                key={content}
                style={TypographyStyle['base-text']}
                tag={TypographyTag.li}
                className={styles.subStep}
              >
                <span>{content}</span>
              </Typography>
            );
          })}
        </ListElement>
      </div>
    </div>

  );
};
