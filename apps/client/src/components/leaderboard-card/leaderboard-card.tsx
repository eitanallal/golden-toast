import {
  useGetBestScoreQuery,
  useGetCurrentScoreQuery,
  useGetLeaderBoardQuery,
} from '../../store/services/toasts.api';
import { Card, UserResult } from '../';
import styles from './leaderboard-card.module.css';

export const LeaderboardCard: React.FC = () => {
  const { data: bestScore } = useGetBestScoreQuery();
  const { data: currentScore } = useGetCurrentScoreQuery();
  const { data: leaderboardList } = useGetLeaderBoardQuery();
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>לוח תוצאות</div>
        <div className={styles.list}>
          {leaderboardList === undefined ? (
            <p> no leaderboard found </p>
          ) : (
            leaderboardList.map((item, index) => (
              <UserResult
                user={item.username}
                score={item.totalcount}
                index={index}
              />
            ))
          )}
        </div>
      </div>
      <div className={styles.global_scores}>
        <div className={styles.score}>
          <div className={styles.scoreTitle}> נוכחי </div>
          <div className={styles.scoreValue}> {currentScore} </div>
        </div>

        <div className={styles.score}>
          <div className={styles.scoreTitle}> שיא </div>
          <div className={styles.scoreValue}> {bestScore} </div>
        </div>
      </div>
    </Card>
  );
};

export default LeaderboardCard;
