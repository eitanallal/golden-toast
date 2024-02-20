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

  const currentDate = date.toLocaleDateString('en-GB');
  const currentTime =
    date.toLocaleTimeString('en-GB').split(':')[0] +
    ':' +
    date.toLocaleTimeString('en-GB').split(':')[1];
  return (
    <div className={styles.dateTimeBox}>
      <div>{currentDate}</div>
      <div>{currentTime}</div>
    </div>
  );
};

export default GetDate;
