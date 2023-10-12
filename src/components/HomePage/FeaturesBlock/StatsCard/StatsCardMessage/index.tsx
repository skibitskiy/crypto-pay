import React, { useEffect, useState } from 'react';
import BackArrow from '@/icons/back-arrow.svg';
import { IMessageWithInlineButtonsProps, MessageWithInlineButtons } from '@/components/Telegram/MessageWithInlineButtons';

import styles from './styles.module.css';

interface IStatsCardMessageProps extends Pick<IMessageWithInlineButtonsProps, 'className'> {}

const BUTTONS: IMessageWithInlineButtonsProps['buttons'] = [
  { letName: 'All time' },
  { letName: 'Today' },
  { letName: 'Yestarday' },
  { letName: 'Week' },
  { letName: 'Month', fullWidth: true },
  {
    letName: (
      <>
        <BackArrow />
        <span style={{ marginLeft: '8px' }}>Back</span>
      </>
    ),
    fullWidth: true,
    isLast: true,
  },
];

const getButtonsWithOneActive = (index: number) => {
  const result = [...BUTTONS];
  const element = BUTTONS[index];
  const newElement: IMessageWithInlineButtonsProps['buttons'][number] = { ...element, className: styles.activeInlineButtonClassName, isActive: true };

  result.splice(index, 1, newElement);

  return result;
};

export const StatsCardMessage: React.FC<IStatsCardMessageProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((i) => { return (i + 1) % 4; });
    }, 2000);

    return () => { return clearInterval(intervalId); };
  }, []);

  return (
    <MessageWithInlineButtons
      className={className}
      inlineButtonClassName={styles.inlineButtonClassName}
      hours={21}
      minutes={30}
      text={(
        <>
          Application Statistics @GoodsBot for all time:
          {'\u000A'}
          {'\u000A'}
          Volume: $6,530
          {'\u000A'}
          {'\u000A'}
          The number of created invoices: 15,569
          {'\u000A'}
          Number of payments: 6,453
          {'\u000A'}
          Number of users: 5,606
          {'\u000A'}
          {'\u000A'}
          Conversion: 41%
        </>
      )}
      buttons={getButtonsWithOneActive(activeIndex)}
    />
  );
};
