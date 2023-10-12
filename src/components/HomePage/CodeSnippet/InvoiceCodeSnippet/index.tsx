import React from 'react';

import styles from './styles.module.css';
import { CodeSnippet, ICodeSnippetProps } from '..';

interface IInvoiceCodeSnippetProps extends Pick<ICodeSnippetProps, 'isPart' | 'className'> {}

export const InvoiceCodeSnippet: React.FC<IInvoiceCodeSnippetProps> = (props) => {
  const { className, isPart } = props;

  return (
    <CodeSnippet isPart={isPart} className={className}>
      <span className={styles.code_blue}>Invoice</span>
      <span>(</span>
      {'\u000A'}
      <span className={styles.code_blue}>   payload:</span>
      <span> &quot;item:monthly_premium&quot;,</span>
      {'\u000A'}
      <span className={styles.code_blue}>   status:</span>
      <span>  &quot;paid&quot;,</span>
      {'\u000A'}
      <span className={styles.code_blue}>   amount:</span>
      <span>  &quot;3.99&quot;,</span>
      {'\u000A'}
      <span className={styles.code_blue}>   asset:</span>
      <span>   &quot;USDT&quot;</span>
      {'\u000A'}
      <span>)</span>
    </CodeSnippet>
  );
};
