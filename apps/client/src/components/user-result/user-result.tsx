import React from 'react';
import styles from './user-result.module.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type UserResultProps = {
  user: string;
  index: number;
  score: number;
};

export const UserResult: React.FC<UserResultProps> = ({
  user,
  index,
  score,
}) => {
  return (
    <div
      className={`${styles.results_box}  ${index === 0 && styles.first} ${
        index === 1 && styles.second
      } ${index === 2 && styles.third} ${index > 2 && styles.regular}`}
    >
      <div className={styles.medalCountainer}>
        <EmojiEventsIcon />
      </div>
      <div
        className={`${styles.ranking} ${index === 0 && styles.first} ${
          index === 1 && styles.second
        } ${index === 2 && styles.third} ${index > 2 && styles.regular}`}
      >
        <div className={styles.usernameBox}>{user}</div>
      </div>
      <div className={styles.score}>{score}</div>
    </div>
  );
};

export default UserResult;
