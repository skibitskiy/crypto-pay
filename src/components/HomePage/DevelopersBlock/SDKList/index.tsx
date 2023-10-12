import React from 'react';

import { Typography, TypographyStyle } from '@/components/Typography';
import styles from './styles.module.css';
import { i18n } from './i18n';

const LIBRARIES = [
  { name: i18n('js-tool'), icon: 'js-logo.png' },
  { name: i18n('dot-net-tool'), icon: 'dot-net-logo.png' },
  { name: i18n('php-tool'), icon: 'php-logo.png' },
  { name: i18n('python-tool'), icon: 'python-logo.png' },
  { name: i18n('go-tool'), icon: 'go-logo.png' },
];

export const SDKList: React.FC = () => {
  return (
    <div className={styles.librariesContainer}>
      {LIBRARIES.map(({ icon, name }) => {
        return (
          <div key={name} className={styles.libraryContainer}>
            <img className={styles.icon} src={`/${icon}`} alt={name} />
            <Typography className={styles.libraryName} style={TypographyStyle['base-text']}>{name}</Typography>
          </div>
        );
      })}
    </div>
  );
};
