import Card from '../card/card';
import Toast from '../toast/toast';
import styles from './toasts-card.module.css';

export const ToastsCard = () => {
  return (
    <Card>
      <div className={styles.cardTitle}>Toasts</div>
      <div className={styles.mainSectionContainer}>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> Passed </div>
          <div className={styles.subsection}>
            <Toast user="User long enough for Tomer" date="2024-03-10" />
            <Toast user="User 2" date="2024-03-11" />
            <Toast user="User 3" date="2024-03-10" />
            <Toast user="User 4" date="2024-03-11" />
            <Toast user="User 5" date="2024-03-10" />
            <Toast user="" date="" />
            <Toast user="" date="" />
            <Toast user="" date="" />
            <Toast user="" date="" />
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> Future </div>
          <div className={styles.subsection}>
            <Toast user="User 1" date="2024-03-10" />
            <Toast user="User 2" date="2024-03-11" />
            <Toast user="User 3" date="2024-03-10" />
            <Toast user="User 4" date="2024-03-11" />
            <Toast user="User 5" date="2024-03-10" />
            <Toast user="" date="" />
            <Toast user="" date="" />
            <Toast user="" date="" />
            <Toast user="" date="" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ToastsCard;
