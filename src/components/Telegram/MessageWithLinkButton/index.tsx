import React from 'react';

import ArrowIcon from '@/icons/link-arrow.svg';

import { MessageWithInlineButtons, IMessageWithInlineButtonsProps } from '../MessageWithInlineButtons';
import styles from './styles.module.css';
import { IInlineButtonProps } from '../InlineButton';

interface IMessageWithLinkButtonProps extends
  Pick<IMessageWithInlineButtonsProps, 'className' | 'hours' | 'minutes' | 'text'>,
  Pick<IInlineButtonProps, 'letName'> {
}

const renderLinkArrow = () => {
  return (
    <div className={styles.arrow}>
      <ArrowIcon />
    </div>
  );
};

export const MessageWithLinkButton: React.FC<IMessageWithLinkButtonProps> = ({
  className, hours, letName, minutes, text,
}) => {
  return (
    <MessageWithInlineButtons
      className={className}
      hours={hours}
      minutes={minutes}
      text={text}
      buttons={[{
        letName,
        renderExtra: renderLinkArrow,
        className: styles.linkButton,
        isLast: true,
        fullWidth: true,
      }]}
    />
  );
};
