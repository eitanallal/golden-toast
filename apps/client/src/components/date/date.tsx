import { useState, useEffect } from 'react';
import styles from './date.module.css';

const GetDate: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    // Clean up the interval when the component unmounts
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  // Return the date to be displayed in the component
  return (
    <div className={styles.dateTimeBox}>
      <div>{date.toLocaleDateString('en-GB')}</div>
      <div>{date.toLocaleTimeString('en-GB')}</div>
    </div>
  );
};

export default GetDate;
