// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import GetDate from '../components/date/date';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import LoginMenu from '../components/login/login';

export function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
    console.log('closing login modal');
  };

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <GetDate />
        <div className={styles.titleUsername}>USERNAME</div>
        <button
          className={styles.signupLoginButton}
          onClick={handleOpenLoginModal}
        >
          Sign up / Login
        </button>
        <Dialog
          open={openLoginModal}
          onClose={() => handleCloseLoginModal}
          onClick={() => handleCloseLoginModal}
          maxWidth={false}
        >
          <LoginMenu handleCloseLoginModal={handleCloseLoginModal} />
        </Dialog>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leaderboard}>
          <div className={styles.categorytitle}>LEADERBOARD</div>
          <div>Please log in to see content !</div>
        </div>
        <div className={styles.toasts}>
          <div className={styles.categorytitle}>TOAST</div>
          <div>Please log in to see content !</div>
        </div>
        <div className={styles.criminals}>
          <div className={styles.categorytitle}>CRIMINALS</div>
          <div>Please log in to see content !</div>
        </div>
      </div>
      <div className={styles.bottomMenu}>
        <button
          className={styles.addToastButton}
          onClick={handleOpenLoginModal}
        >
          Add a toast
        </button>
      </div>
    </div>
  );
}

export default App;
