import React, { useState } from 'react';

import { easings, animated, useSpring } from '@react-spring/web';
import { Card, ICardProps } from '../Card';
import { CreateAppButton } from './CreateAppButton';

import styles from './styles.module.css';
import { i18n } from './i18n';

interface ICreateAppCardProps extends Pick<ICardProps, 'className'> {}

export const CreateAppCard: React.FC<ICreateAppCardProps> = ({ className }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const [cursorSprings] = useSpring({
    from: {
      transform: 'translate(30px, 25px)',
      scale: 1,
    },
    to: async (next) => {
      await next({ transform: 'translate(0px, 0px)' });
      setIsButtonActive(true);
      await next({ scale: 1.1, config: { duration: 300 } });
      await next({ scale: 1, config: { duration: 300 } });
      setIsButtonActive(false);
      await next({ transform: 'translate(30px, 25px)' });
    },
    config: {
      duration: 600,
      easing: easings.easeOutQuad,
    },
    delay: 5000,
    loop: true,
  }, []);

  return (
    <Card
      className={className}
      title={i18n('title')}
      description={i18n('description')}
    >
      <div className={styles.buttonContainer}>
        <div className={styles.buttonInnerContainer}>
          <animated.div style={{ scale: cursorSprings.scale }}>
            <CreateAppButton className={styles.animatedButton} isActive={isButtonActive} />
          </animated.div>
          <animated.div style={{ transform: cursorSprings.transform }}>
            <img className={styles.cursor} alt="cursor" src="/cursor.svg" />
          </animated.div>
        </div>
      </div>
    </Card>
  );
};
