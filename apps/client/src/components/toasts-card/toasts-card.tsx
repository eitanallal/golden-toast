import Card from '../card/card';
import Toast from '../toast/toast';
import styles from './toasts-card.module.css';

type ToastsCardProps = {
  children: React.ReactNode;
};

export const ToastsCard = (props: ToastsCardProps) => {
  return (
    <Card>
      <div className={styles.cardTitle}>Toasts</div>
      <div className={styles.mainSection}>
        <div className={styles.periodName}> Passed </div>
        <div className={styles.subsection}>
          <Toast user="User long enough for Tomer" date="2024-03-10"></Toast>
          <Toast user="User 2" date="2024-03-11"></Toast>
          <Toast user="User 3" date="2024-03-10"></Toast>
          <Toast user="User 4" date="2024-03-11"></Toast>
          <Toast user="User 5" date="2024-03-10"></Toast>
          <Toast user="" date=""></Toast>
          <Toast user="" date=""></Toast>
          <Toast user="" date=""></Toast>
          <Toast user="" date=""></Toast>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.periodName}> Future </div>
        <div className={styles.subsection}>
          <Toast user="User 1" date="2024-03-10"></Toast>
          <Toast user="User 2" date="2024-03-11"></Toast>
          <Toast user="User 3" date="2024-03-10"></Toast>
          <Toast user="User 4" date="2024-03-11"></Toast>
          <Toast user="User 5" date="2024-03-10"></Toast>
          <Toast user="" date=""></Toast>
          <Toast user="" date=""></Toast>
          <Toast user="" date=""></Toast>
          <Toast user="" date=""></Toast>
        </div>
      </div>
    </Card>
  );
};

export default ToastsCard;
