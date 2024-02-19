// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import GetDate from '../components/date/date';
import { useState } from 'react';
import LoginMenu from '../components/login/login';
import SignUpMenu from '../components/signUp/signUp';

export const App = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <GetDate />
        <div className={styles.titleUsername}>USERNAME</div>
        <button
          className={styles.signupLoginButton}
          onClick={() => setIsOpenLoginModal(true)}
        >
          Sign up / Login
        </button>

        <LoginMenu
          setIsOpenLoginModal={setIsOpenLoginModal}
          isOpenLoginModal={isOpenLoginModal}
          setIsOpenSignUpModal={setIsOpenSignUpModal}
        />

        <SignUpMenu
          setIsOpenSignUpModal={setIsOpenSignUpModal}
          isOpenSignUpModal={isOpenSignUpModal}
        />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leaderboard}>
          <div className={styles.categorytitle}>LEADERBOARD</div>
          <p>Please log in to see content !</p>
        </div>
        <div className={styles.toasts}>
          <div className={styles.categorytitle}>TOAST</div>
          <p>Please log in to see content !</p>
        </div>
        <div className={styles.criminals}>
          <div className={styles.categorytitle}>CRIMINALS</div>
          <p>Please log in to see content !</p>
        </div>
      </div>
      <div className={styles.bottomMenu}>
        <button
          className={styles.addToastButton}
          onClick={() => setIsOpenLoginModal(true)}
        >
          Add a toast
        </button>
      </div>
    </div>
  );
};

export default App;
