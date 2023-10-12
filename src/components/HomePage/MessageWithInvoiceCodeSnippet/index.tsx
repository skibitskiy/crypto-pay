import React, { FC } from 'react';
import { СonsequenceArrow } from './СonsequenceArrow';
import { IMessageProps, Message } from '../../Telegram/Message';
import { InvoiceCodeSnippet } from '../CodeSnippet/InvoiceCodeSnippet';

import styles from './styles.module.css';

interface IMessageWithInvoiceCodeSnippetProps extends Pick<IMessageProps, 'hours' | 'minutes' | 'text'> {}

export const MessageWithInvoiceCodeSnippet: FC<IMessageWithInvoiceCodeSnippetProps> = (props) => {
  const { hours, minutes, text } = props;
  return (
    <div className={styles.container}>
      <Message hours={hours} minutes={minutes} text={text} isPart />
      <СonsequenceArrow className={styles.arrow} />
      <InvoiceCodeSnippet isPart />
    </div>
  );
};
