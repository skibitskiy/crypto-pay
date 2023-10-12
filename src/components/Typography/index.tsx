import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export enum TypographyStyle {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  'base-text' = 'base-text',
  button = 'button',
  description = 'description',
}

export enum TypographyTag {
  span = 'span',
  p = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  li = 'li',
}

export enum TypographyStyleToTag {
  button = 'span',
  'base-text' = 'p',
  'description' = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

interface ITypographyProps {
  className?: string
  tag?: TypographyTag
  style: TypographyStyle
}

export const Typography: React.FC<PropsWithChildren<ITypographyProps>> = (
  {
    className, style, tag, children,
  },
) => {
  const Tag = tag || TypographyStyleToTag[style];

  return <Tag className={classNames(className, styles.typography, 'typography', styles[style])}>{children}</Tag>;
};
