// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import GetDate from '../components/date/date';
export function App() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <GetDate />
        <div className={styles.titleUsername}>USERNAME</div>
        <div className={styles.signupLogin}>Sign up / Login</div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leaderboard}>
          <div className={styles.categorytitle}>LEADERBOARD</div>
        </div>
        <div className={styles.toasts}>
          <div className={styles.categorytitle}>TOAST</div>
        </div>
        <div className={styles.criminals}>
          <div className={styles.categorytitle}>CRIMINALS</div>
        </div>
      </div>
      <div className={styles.bottomMenu}>
        <div className={styles.addToastButton}>Add a toast</div>
      </div>
    </div>
  );
}

export default App;
