import styles from './app.module.css';
import { useState } from 'react';
import {
  AddToast,
  LoginMenu,
  SignUpMenu,
  LeaderboardCard,
  GetDate,
  CriminalsCard,
  ToastsCard,
  SettingsMenu,
} from '../components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { ToastContainer } from 'react-toastify';
import { useLoginMutation } from '../store';

export const App = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const [isOpenAddToastModal, setIsOpenAddToastModal] = useState(false);
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);
  const [login, result] = useLoginMutation({ fixedCacheKey: 'login-key' });

  return (
    <div className={styles.background}>
      <ToastContainer />
      <div className={styles.header}>
        <GetDate />
        <div className={styles.appTitle}>השתיית הזהב</div>

        {!result.data ? (
          <button
            className={styles.signupLoginButton}
            onClick={() => setIsOpenLoginModal(true)}
          >
            הרשם התחבר
          </button>
        ) : (
          <div className={styles.helloBox}>
            <p>
              {result.data.firstName} {result.data.lastName} היי{' '}
            </p>
          </div>
        )}

        <LoginMenu
          setIsOpenLoginModal={setIsOpenLoginModal}
          isOpenLoginModal={isOpenLoginModal}
          setIsOpenSignUpModal={setIsOpenSignUpModal}
        />

        <SignUpMenu
          setIsOpenSignUpModal={setIsOpenSignUpModal}
          isOpenSignUpModal={isOpenSignUpModal}
        />

        <AddToast
          setIsOpenAddToastModal={setIsOpenAddToastModal}
          isOpenAddToastModal={isOpenAddToastModal}
        />

        <SettingsMenu
          setIsOpenSettingsModal={setIsOpenSettingsModal}
          isOpenSettingsModal={isOpenSettingsModal}
        />
      </div>
      <div className={styles.mainContent}>
        <SettingsIcon
          sx={{ fontSize: 30, color: 'black' }}
          onClick={() => setIsOpenSettingsModal(true)}
        />
        <LeaderboardCard />
        <ToastsCard />
        <CriminalsCard />
        <AddCircleOutlineIcon
          sx={{ fontSize: 30, color: 'green' }}
          onClick={() => setIsOpenAddToastModal(true)}
        />
      </div>
    </div>
  );
};

export default App;
