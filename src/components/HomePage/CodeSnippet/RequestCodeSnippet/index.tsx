import React from 'react';

import styles from './styles.module.css';
import { CodeSnippet, ICodeSnippetProps } from '..';

interface IRequestCodeSnippetProps extends Pick<ICodeSnippetProps, 'isPart' | 'className'> {}

export const RequestCodeSnippet: React.FC<IRequestCodeSnippetProps> = (props) => {
  const { className, isPart } = props;

  return (
    <CodeSnippet isPart={isPart} className={className}>
      <span>asset</span>
      <span className={styles.code_blue}>=</span>
      <span className={styles.code_yellow}>TON</span>
      <span className={styles.code_orange}>&</span>
      <span>amount</span>
      <span className={styles.code_blue}>=</span>
      <span className={styles.code_yellow}>2.75</span>
      {'\u000A'}
      <span>{'{"asset":'}</span>
      <span className={styles.code_blue}>&quot;TON&quot;</span>
      <span>, </span>
      <span>&quot;amount&quot;:</span>
      <span className={styles.code_blue}>&quot;2.75&quot;</span>
      <span>{'}'}</span>
    </CodeSnippet>
  );
};
