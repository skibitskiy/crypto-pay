import React, { useEffect, useState } from 'react';
import { animated, useSprings } from '@react-spring/web';

import Dollar from '@/icons/currencies/DOLLAR.svg';
import USDT from '@/icons/currencies/USDT.svg';
import USDTEmpty from '@/icons/currencies/USDT-empty.svg';
import BTC from '@/icons/currencies/BTC.svg';
import BTCEmpty from '@/icons/currencies/BTC-empty.svg';
import TON from '@/icons/currencies/TON.svg';
import TONEmpty from '@/icons/currencies/TON-empty.svg';
import ArrowIcon from '@/icons/currencies/arrow.svg';

import styles from './styles.module.css';

const CURRENCIES = [
  { name: 'USDT', icon: USDT, emptyIcon: USDTEmpty },
  { name: 'BTC', icon: BTC, emptyIcon: BTCEmpty },
  { name: 'TON', icon: TON, emptyIcon: TONEmpty },
];

export const AnimatedCurrencies = () => {
  const [startIndex, setIndex] = useState(0);

  const [springs] = useSprings(3, (i) => {
    const translateTo = -104 * i + (34 * ((startIndex + i) % 3));
    const opacityFrom = (startIndex + i) % 3 === 3 ? 1 : 0;
    const opacityTo = (startIndex + i) % 3 === 2 ? 1 : 0;

    return {
      from: {
        translate: 0,
        opacity: opacityFrom,
      },
      to: {
        translate: translateTo,
        opacity: opacityTo,
      },
      config: {
        duration: 300,
        tension: 120,
        friction: 14,
      },
    };
  }, [startIndex]);

  useEffect(() => {
    const mainIntervalId = setInterval(() => {
      let count = 0;
      const intervalId = setInterval(() => {
        count += 1;
        if (count === 3) {
          clearInterval(intervalId);
        }
        setIndex((state) => {
          return (state + 1) % CURRENCIES.length;
        });
      }, 800);
    }, 5000);

    return () => { clearInterval(mainIntervalId); };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.animatedCurrenciesContainer}>
        {springs.map(({ opacity, translate }, i) => {
          const { name, icon: ICON, emptyIcon: EmptyIcon } = CURRENCIES[i];
          return (
            <animated.div
              key={name}
              style={{
                translate,
                zIndex: (startIndex + i) % 3,
              }}
            >
              <div className={styles.icon}>
                <div className={styles.positionedIcon}>
                  <EmptyIcon />
                </div>
                <animated.div className={styles.positionedIcon} style={{ opacity }}>
                  <ICON />
                </animated.div>
              </div>
            </animated.div>
          );
        })}
      </div>
      <div className={styles.exchange}>
        <ArrowIcon />
        <div className={styles.bottomArrow}>
          <ArrowIcon />
        </div>
      </div>
      <Dollar />
    </div>
  );
};
