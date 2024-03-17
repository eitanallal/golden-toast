import styles from './criminal.module.css';
import React from 'react';

type CriminalProps = {
  user: string;
  isPersonNonGrata: boolean;
};

export const Criminal: React.FC<CriminalProps> = ({
  user,
  isPersonNonGrata,
}) => {
  return (
    <div className={styles.criminals_column}>
      <div
        className={`${isPersonNonGrata === true && styles.single_personNonGrata}
                    ${isPersonNonGrata === false && styles.single_criminal}`}
      >
        <div className={styles.userbox}>{user}</div>
      </div>
    </div>
  );
};

export default Criminal;
