import Card from '../card/card';
import styles from './toasts-card.module.css';

type ToastsCardProps = {
  children: React.ReactNode;
};

export const ToastsCard = (props: ToastsCardProps) => {
  return (
    <Card>
      <div className={styles.cardTitle}>Toasts</div>
      <div>props.children</div>
    </Card>
  );
};

export default ToastsCard;
