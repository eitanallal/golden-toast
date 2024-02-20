import styles from './card.module.css';

interface CardProps {
  cardName: string;
  width: string;
}

export const Card: React.FC<CardProps> = ({ cardName, width }) => {
  return (
    <div className={styles.card} style={{ width: width }}>
      <div className={styles.cardTitle}>{cardName}</div>
      <p>Please log in to see content !</p>
    </div>
  );
};

export default Card;
