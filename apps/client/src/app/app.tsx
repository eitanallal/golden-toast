// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import GetDate from '../components/date/date';
import { useState } from 'react';
import LoginMenu from '../components/login/login';
import SignUpMenu from '../components/signUp/signUp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Card from '../components/card/card';

export const App = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <GetDate />
        <div className={styles.appTitle}>GOLDEN TOAST</div>
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
        <Card cardName="Leaderboard" width="30%"></Card>
        <Card cardName="Toasts" width="35%"></Card>
        <Card cardName="Criminals" width="30%"></Card>
      </div>
      <div className={styles.bottomMenu}>
        <AddCircleOutlineIcon
          sx={{ fontSize: 40, color: 'green' }}
          onClick={() => setIsOpenLoginModal(true)}
        />
      </div>
    </div>
  );
};

export default App;
