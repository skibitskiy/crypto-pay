import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { animated, useSprings, easings } from '@react-spring/web';
import { Notification } from '@/components/Telegram/Notification';
import { Card, ICardProps } from '../Card';

import styles from './styles.module.css';
import { i18n } from './i18n';

interface IAutoPaymentsCardProps extends Pick<ICardProps, 'className'> {}

const opacityValues = [1, 0.7, 0];

export const AutoPaymentsCard: React.FC<IAutoPaymentsCardProps> = ({ className }) => {
  const [offset, setOffset] = useState(0);

  const [springs] = useSprings(3, (i) => {
    const currentIndex = (i + offset) % 3;
    const nextIndex = (currentIndex + 1) % 3;

    const yFrom = (1 - currentIndex) * 28;
    const yTo = (1 - nextIndex) * 28;

    return {
      from: {
        transform: 'perspective(100px)',
        translateX: '-50%',
        translateY: yFrom,
        translateZ: 0,
        opacity: 1,
      },
      to: {
        transform: 'perspective(100px)',
        translateX: currentIndex !== 0 ? '-55%' : '-50%',
        translateY: yTo,
        translateZ: currentIndex !== 0 ? -10 : 0,
        opacity: opacityValues[currentIndex],
      },
      config: {
        duration: 400,
        easing: easings.easeInOutCirc,
      },
    };
  }, [offset]);

  useEffect(() => {
    const mainIntervalId = setInterval(() => {
      let count = 0;
      const intervalId = setInterval(() => {
        count += 1;
        if (count === 2) {
          clearInterval(intervalId);
        }
        setOffset((state) => {
          return (state + 1) % 3;
        });
      }, 1000);
    }, 5000);

    return () => { clearInterval(mainIntervalId); };
  }, []);

  return (
    <Card
      className={classNames(className, styles.container)}
      title={i18n('title')}
      description={i18n('description')}
    >
      <div className={styles.iphoneContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.iphoneBottom} />
          <div className={styles.messagesContainer}>
            {
              springs.map(((style, i) => {
                const currentIndex = (i + offset) % 3;

                return (
                  <animated.div
                    className={styles.message}
                    style={{
                      ...style,
                      zIndex: 2 - ((i + offset) % 3),
                    }}
                  >
                    <Notification isContentHidden={currentIndex !== 0} userPicSrc="/crypto-pay_logo-40.png" message={i18n('message')} title={i18n('messageTitle')} />
                  </animated.div>
                );
              }))
            }
          </div>
        </div>
      </div>
    </Card>
  );
};
