import Card from '../card/card';
import styles from './criminals-card.module.css';

export const CriminalsCard: React.FC = () => {
  return (
    <Card>
      <div className={styles.cardTitle}>Criminals</div>
    </Card>
  );
};

export default CriminalsCard;
