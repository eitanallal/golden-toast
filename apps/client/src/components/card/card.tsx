import React from 'react';
import styles from './card.module.css';
type CardProps = {
  children: React.ReactNode;
};

export const Card = (props: CardProps) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
