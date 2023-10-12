'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SpringValue, a, useTransition } from '@react-spring/web';

import { Message } from '@/components/Telegram/Message';
import { MessageWithLinkButton } from '@/components/Telegram/MessageWithLinkButton';
import { MessageWithInvoiceCodeSnippet } from '@/components/HomePage/MessageWithInvoiceCodeSnippet';
import classNames from 'classnames';
import { BlockLayout } from '../BlockLayout';

import { UseCaseCard } from './UseCaseCard';
import { UseCaseDescription } from './UseCaseDescription';

import styles from './styles.module.css';
import { ProgressBar } from './ProgressBar';
import { i18n } from './i18n';

interface IBlock {
  description: string;
  proposal: string;
  solution: string;
  backgroundClassName: string;
  renderContent: (animation: { translateY: SpringValue<string> }) => React.ReactNode
}

const blocks: IBlock[] = [
  {
    description: i18n('firstCard.description'),
    proposal: i18n('firstCard.proposal'),
    solution: i18n('firstCard.solution'),
    backgroundClassName: styles.card_backgound_pink,
    renderContent: (animation: { translateY: SpringValue<string> }) => {
      return (
        <a.div className={styles.messageContainer} style={{ translateY: animation.translateY }}>
          <Message
            className={styles.message}
            hours={21}
            minutes={25}
            text={i18n('firstCard.firstMessage')}
          />
          <Message
            withTail
            className={styles.message}
            hours={21}
            minutes={25}
            text={i18n('firstCard.secondMessage')}
          />
        </a.div>
      );
    },
  },
  {
    description: i18n('secondCard.description'),
    proposal: i18n('secondCard.proposal'),
    solution: i18n('secondCard.solution'),
    backgroundClassName: styles.card_backgound_yellow,
    renderContent: (animation: { translateY: SpringValue<string> }) => {
      return (
        <a.div className={styles.messageContainer} style={{ translateY: animation.translateY }}>
          <MessageWithLinkButton
            className={styles.message}
            letName={i18n('secondCard.inlineButtonText')}
            hours={21}
            minutes={30}
            text={i18n('secondCard.message')}
          />
        </a.div>
      );
    },
  },
  {
    description: i18n('thirdCard.description'),
    proposal: i18n('thirdCard.proposal'),
    solution: i18n('thirdCard.solution'),
    backgroundClassName: styles.card_backgound_blue,
    renderContent: (animation: { translateY: SpringValue<string> }) => {
      return (
        <a.div className={styles.messageContainer} style={{ translateY: animation.translateY }}>
          <MessageWithInvoiceCodeSnippet
            hours={22}
            minutes={10}
            text={i18n('thirdCard.message')}
          />
        </a.div>
      );
    },
  },
];

export const UseCasesBlock: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [caseIndex, setCaseIndex] = useState(0);

  useEffect(() => {
    const element = document;

    const listener = () => {
      if (!containerRef.current) {
        return;
      }

      const { offsetTop } = containerRef.current;
      const { clientHeight } = containerRef.current;

      const value = window.scrollY - offsetTop;

      const ratio = 3 * (value / clientHeight / 2);

      if (ratio < 1 / 3) {
        setCaseIndex(0);
      } else if (ratio < 2 / 3) {
        setCaseIndex(1);
      } else if (ratio < 1) {
        setCaseIndex(2);
      }
    };

    element?.addEventListener('scroll', listener);

    return () => { element?.removeEventListener('scroll', listener); };
  }, []);

  const transitions = useTransition(caseIndex, {
    from: { opacity: 0, translateY: '-100%' },
    enter: { opacity: 1, translateY: '0%' },
    leave: { opacity: 0, translateY: '100%' },
    config: {
      tension: 250, friction: 30, mass: 2,
    },
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.stickyBlock}>
        {transitions((animation, item) => {
          const {
            description, proposal, solution, backgroundClassName, renderContent,
          } = blocks[item];
          return (
            <div className={styles.useCaseContainer}>
              <BlockLayout alignItems="center">
                <div className={styles.cardContainer}>
                  <a.div
                    className={styles.cardInnerContainer}
                    style={{ opacity: animation.opacity }}
                  >
                    <UseCaseCard
                      className={classNames(styles.card, backgroundClassName)}
                      renderContent={() => {
                        return renderContent({ translateY: animation.translateY });
                      }}
                    />
                  </a.div>
                </div>
                <div className={styles.descriptionContainer}>
                  <a.div style={{ opacity: animation.opacity }}>
                    <UseCaseDescription
                      description={description}
                      proposal={proposal}
                      solution={solution}
                    />
                  </a.div>
                </div>
                <ProgressBar
                  className={styles.progressBarContainer}
                  count={blocks.length}
                  current={caseIndex}
                />
              </BlockLayout>
            </div>
          );
        })}
      </div>
    </div>
  );
};
