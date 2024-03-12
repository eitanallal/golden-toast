import styles from './app.module.css';
import { useState } from 'react';
import { useGetUsersQuery } from '../store/';
import {
  LoginMenu,
  SignUpMenu,
  LeaderboardCard,
  GetDate,
  CriminalsCard,
  ToastsCard,
} from '../components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const App = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const { data: usersList } = useGetUsersQuery();

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <GetDate />
        <div className={styles.appTitle}>GOLDEN TOAST</div>
        <button
          className={styles.signupLoginButton}
          onClick={() => setIsOpenLoginModal(true)}
        >
          Sign Up Login
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
        <LeaderboardCard></LeaderboardCard>
        <ToastsCard></ToastsCard>
        <CriminalsCard></CriminalsCard>
        <AddCircleOutlineIcon
          sx={{ fontSize: 40, color: 'green' }}
          onClick={() => setIsOpenLoginModal(true)}
        />
      </div>
    </div>
  );
};

export default App;
