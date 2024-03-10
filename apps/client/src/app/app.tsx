import styles from './app.module.css';
import { useState } from 'react';
import { useGetUsersQuery } from '../store/';
import { LoginMenu, SignUpMenu, Card, GetDate } from '../components';
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
