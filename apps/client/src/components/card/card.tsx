import React from 'react';
import styles from './card.module.css';
type CardProps = {
  children: React.ReactNode;
  width: string;
};

export const Card: React.FC<CardProps> = ({ children, width }) => {
  return (
    <div className={styles.card} style={{ width: width }}>
      {children}
    </div>
  );
};

export default Card;
