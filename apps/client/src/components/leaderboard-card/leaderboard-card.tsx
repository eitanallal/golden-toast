import Card from '../card/card';
import UserResult from '../user-result/user-result';
import styles from './leaderboard-card.module.css';
export const LeaderboardCard: React.FC = () => {
  return (
    <Card>
      <div className={styles.cardTitle}>Leaderboard</div>
      <div className={styles.list}>
        <UserResult user="Eitan Allal" index={0} score={6} />
        <UserResult user="Amit Yahalom" index={1} score={4} />
        <UserResult user="Inbar" index={2} score={3} />
        <UserResult user="LOL" index={3} score={3} />
      </div>
      <div className={styles.global_scores}>
        <div className={styles.score}>
          <div className={styles.scoreTitle}> CURRENT </div>
          <div className={styles.scoreValue}> 12 </div>
        </div>

        <div className={styles.score}>
          <div className={styles.scoreTitle}> PAST </div>
          <div className={styles.scoreValue}> 12 </div>
        </div>
      </div>
    </Card>
  );
};

export default LeaderboardCard;
