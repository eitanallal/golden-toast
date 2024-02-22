import { useState, useEffect } from 'react';
import styles from './date.module.css';

export const GetDate: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });

  const currentDate = date.toLocaleDateString('fr-FR');
  const currentTime = date.toLocaleTimeString('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
  });
  return (
    <div className={styles.dateTimeBox}>
      <div>{currentDate}</div>
      <div>{currentTime}</div>
    </div>
  );
};
