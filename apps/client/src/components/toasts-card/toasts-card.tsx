import {
  useGetFutureToastsQuery,
  useGetPassedToastsQuery,
  useGetPassedUserToastsQuery,
} from '../../store/services/toasts.api';
import { Card, Toast } from '../';
import styles from './toasts-card.module.css';
import { useLoginMutation } from '../../store';

export const ToastsCard = () => {
  const [login, loginResult] = useLoginMutation({ fixedCacheKey: 'login-key' });
  const { data: futureToastsList } = useGetFutureToastsQuery();
  const { data: passedToastsList } = useGetPassedToastsQuery();
  const { data: passedToastsUserList } = useGetPassedUserToastsQuery(
    loginResult.data?.id
  );

  return (
    <Card width="40%">
      <div className={styles.cardTitle}>שתיות</div>
      <div className={styles.mainSectionContainer}>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> עתיד </div>
          <div className={styles.subsection}>
            {!futureToastsList || futureToastsList.length === 0 ? (
              <p> No Toast found </p>
            ) : (
              futureToastsList.map((item, index) => (
                <Toast
                  key={index}
                  user={item.user}
                  date={item.date.split('T')[0]}
                  toastId={item.id}
                  hasHappened={item.hasHappened}
                />
              ))
            )}
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.periodName}> עבר </div>
          <div className={styles.subsection}>
            {!loginResult.data ? (
              <p> Please log in </p>
            ) : !passedToastsList || passedToastsList.length === 0 ? (
              <p> No user found </p>
            ) : !loginResult.data.isAdmin ? (
              passedToastsUserList?.map((item, index) => (
                <Toast
                  key={index}
                  user={item.user}
                  date={item.date.split('T')[0]}
                  toastId={item.id}
                  hasHappened={item.hasHappened}
                />
              ))
            ) : (
              passedToastsList.map((item, index) => (
                <Toast
                  key={index}
                  user={item.user}
                  date={item.date.split('T')[0]}
                  toastId={item.id}
                  hasHappened={item.hasHappened}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ToastsCard;
