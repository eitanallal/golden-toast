import Card from '../card/card';
import styles from './leaderboard-card.module.css';
export const LeaderboardCard: React.FC = () => {
  return (
    <Card>
      <div className={styles.cardTitle}>Leaderboard</div>
    </Card>
  );
};

export default LeaderboardCard;
