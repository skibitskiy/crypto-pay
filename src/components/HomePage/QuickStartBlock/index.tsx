import React from 'react';
import { Typography, TypographyStyle } from '@/components/Typography';
import classNames from 'classnames';
import { MessageWithInlineButtons } from '@/components/Telegram/MessageWithInlineButtons';
import { BlockLayout } from '../BlockLayout';

import styles from './styles.module.css';
import { Step } from './Step';
import { InvoiceCodeSnippet } from '../CodeSnippet/InvoiceCodeSnippet';
import { RequestCodeSnippet } from '../CodeSnippet/RequestCodeSnippet';

export const QuickStartBlock: React.FC = () => {
  return (
    <div className={styles.backgroundContainer}>
      <BlockLayout className={styles.layout}>
        <Typography className={styles.title} style={TypographyStyle.h2}>
          Quick start using Crypto Pay
        </Typography>
        <Step
          className={classNames(styles.leftColumn, styles.authStep)}
          index={1}
          title="Authorizing your app"
          ordered
          subSteps={[
            'Open @CryptoBot',
            'Go to Crypto Pay',
            'Tap Create App',
            'Get API Token',
          ]}
        />
        <div
          className={
            classNames(styles.card, styles.purpleCard, styles.rightColumn, styles.authCard)
          }
        >
          <MessageWithInlineButtons hours={21} minutes={30} text={'Here is the token for the app @GoodsBot\n\n114935:AA9xMcRqHYZYl6CQlkhBStMAwT\nFQ1s6iJHM\n\nThis token can be used by anyone to\ncontrol your app. Keep and store it safely.\n\n'} buttons={[{ letName: 'Revoke token', fullWidth: true, isLast: true }]} />
        </div>
        <Step
          className={classNames(styles.apiStep, styles.rightColumn)}
          index={2}
          title="Crypto Pay API Request"
          description={'Requests are only served over HTTPS\nTo pass parameters use:'}
          subSteps={[
            'URL query string',
            'application/json',
            'application/x-www-form-urlencoded',
            'multipart/form-data',
          ]}
        />
        <div className={classNames(styles.card, styles.yellowCard, styles.leftColumn)}>
          <RequestCodeSnippet />
        </div>
        <Step
          className={classNames(styles.leftColumn, styles.updatesStep)}
          index={3}
          title="Getting updates"
          description={'There are two ways of receiving\nupdates for your app:'}
          subSteps={[
            'getInvoices method to get a list of created invoices.',
            'Webhooks to receive updates in realtime.',
          ]}
        />
        <div className={classNames(styles.card, styles.blueCard, styles.rightColumn)}>
          <InvoiceCodeSnippet />
        </div>
      </BlockLayout>
    </div>
  );
};
