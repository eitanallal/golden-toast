import Card from '../card/card';
import Criminal from '../criminal/criminal';
import styles from './criminals-card.module.css';

export const CriminalsCard: React.FC = () => {
  return (
    <Card>
      <div className={styles.cardTitle}>Criminals</div>
      <Criminal user="Tomer Steinberg"></Criminal>
    </Card>
  );
};

export default CriminalsCard;
