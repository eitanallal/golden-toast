import { useGetUserDataQuery } from '../../store';
import {
  useGetFutureToastsQuery,
  useGetPassedToastsQuery,
  useGetToastsQuery,
} from '../../store/services/toasts.api';
import Card from '../card/card';
import Toast from '../toast/toast';
import styles from './toasts-card.module.css';

export const ToastsCard = () => {
  const { data: toastsList } = useGetToastsQuery();
  const { data: futureToastsList } = useGetFutureToastsQuery();
  const { data: passedToastsList } = useGetPassedToastsQuery();
  const { data: userData } = useGetUserDataQuery(
    '94b8c454-d80c-4e01-95da-5d7eaff4f809'
  );
  // console.log(userData);
  return (
    <Card>
      <div className={styles.cardTitle}>שתיות</div>
      <div className={styles.mainSectionContainer}>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> עבר </div>
          <div className={styles.subsection}>
            {passedToastsList === undefined ? (
              <p> No user found </p>
            ) : (
              passedToastsList.map((item) => (
                <Toast
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
            {futureToastsList === undefined ? (
              <p> No user found </p>
            ) : (
              futureToastsList.map((item) => (
                <Toast
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
