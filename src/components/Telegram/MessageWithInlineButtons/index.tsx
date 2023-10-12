import React from 'react';
import classNames from 'classnames';
import { IMessageProps, Message } from '../Message';
import { InlineButton, IInlineButtonProps } from '../InlineButton';

import styles from './styles.module.css';

export interface IMessageWithInlineButtonsProps extends Pick<IMessageProps, 'hours' | 'minutes' | 'text'> {
  className?: string
  inlineButtonClassName?: IInlineButtonProps['className'],
  buttons: (IInlineButtonProps & { fullWidth?: boolean })[]
}

export const MessageWithInlineButtons: React.FC<IMessageWithInlineButtonsProps> = (props) => {
  const {
    className, inlineButtonClassName, hours, minutes, text, buttons,
  } = props;

  return (
    <div className={className}>
      <Message className={styles.message} hours={hours} minutes={minutes} text={text} isPart />
      <div className={styles.buttonsContainer}>
        {buttons.map(({
          letName,
          isActive,
          isLast,
          renderExtra,
          fullWidth,
          className: buttonClassName,
        }, i) => {
          return (
            <InlineButton
              key={i}
              className={
                classNames(
                  buttonClassName,
                  inlineButtonClassName,
                  { [styles.fullWidth]: fullWidth },
                )
              }
              letName={letName}
              isLast={isLast}
              isActive={isActive}
              renderExtra={renderExtra}
            />
          );
        })}
      </div>
    </div>
  );
};
