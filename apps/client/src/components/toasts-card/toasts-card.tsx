import {
  useGetFutureToastsQuery,
  useGetPassedToastsQuery,
} from '../../store/services/toasts.api';
import { Card, Toast } from '../';
import styles from './toasts-card.module.css';

export const ToastsCard = () => {
  const { data: futureToastsList } = useGetFutureToastsQuery();
  const { data: passedToastsList } = useGetPassedToastsQuery();

  return (
    <Card>
      <div className={styles.cardTitle}>שתיות</div>
      <div className={styles.mainSectionContainer}>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> עבר </div>
          <div className={styles.subsection}>
            {!passedToastsList || passedToastsList.length === 0 ? (
              <p> No user found </p>
            ) : (
              passedToastsList.map((item, index) => (
                <Toast
                  key={index}
                  user={item.user.firstName + ' ' + item.user.lastName}
                  date={item.date.split('T')[0]}
                />
              ))
            )}
            <Toast user="" date="" />
            <Toast user="" date="" />
            <Toast user="" date="" />
            <Toast user="" date="" />
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> עתיד </div>
          <div className={styles.subsection}>
            {!futureToastsList || futureToastsList.length === 0 ? (
              <p> No user found </p>
            ) : (
              futureToastsList.map((item, index) => (
                <Toast
                  key={index}
                  user={item.user.firstName + ' ' + item.user.lastName}
                  date={item.date.split('T')[0]}
                />
              ))
            )}
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
