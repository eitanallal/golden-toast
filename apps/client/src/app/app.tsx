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
import { IconButton, Tooltip } from '@mui/material';

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
        <div className={styles.appTitle}>שתיית הזהב</div>

        {!result.data ? (
          <div
            className={styles.signupLoginButton}
            onClick={() => setIsOpenLoginModal(true)}
          >
            הרשם התחבר
          </div>
        ) : (
          <div className={styles.helloBox}>
            <p>
              {result.data.firstName} {result.data.lastName} היי
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
        <Tooltip title="Settings">
          <IconButton
            sx={{ aspectRatio: 1, height: 42 }}
            onClick={() => setIsOpenSettingsModal(true)}
          >
            <SettingsIcon sx={{ fontSize: 40, color: 'black' }} />
          </IconButton>
        </Tooltip>
        <LeaderboardCard />
        <ToastsCard />
        <CriminalsCard />

        <Tooltip title="Add a toast">
          <IconButton
            sx={{ aspectRatio: 1, height: 42 }}
            onClick={() => setIsOpenAddToastModal(true)}
          >
            <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#00a152' }} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
