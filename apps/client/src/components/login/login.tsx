import { useRef, useState } from 'react';
import styles from './login.module.css';
import { useAppDispatch } from '../../store/store';
import { addPerson } from '../../store/features/personSlice';
import { Dialog } from '@mui/material';
import SignUpMenu from '../signUp/signUp';

const LoginMenu = () => {
  const [openSigninModal, setOpenLoginModal] = useState(false);
  const handleOpenSigninModal = () => setOpenLoginModal(true);
  const handleCloseSigninModal = () => {
    setOpenLoginModal(false);
  };

  const name = useRef<string>('');
  const password = useRef<string>('');
  const dispatch = useAppDispatch();
  return (
    <div className={styles.loginMenu}>
      <div className={styles.loginTitle}> Login </div>
      <form className={styles.loginForm}>
        <div className={styles.form}>
          <div className={styles.titleAndBox}>
            <label htmlFor="">username</label>
            <input
              className={styles.inputBox}
              onChange={(e) => (name.current = e.target.value)}
            />
          </div>

          <div className={styles.titleAndBox}>
            <label htmlFor="">password</label>
            <input
              className={styles.inputBox}
              onChange={(e) => (password.current = e.target.value)}
            />
          </div>
        </div>
        <div className={styles.validationButtonContainer}>
          <button
            className={styles.validationButton}
            onClick={() =>
              dispatch(
                addPerson({ name: name.current, password: password.current })
              )
            }
          >
            Add
          </button>
        </div>
      </form>
      <button className={styles.signinButton} onClick={handleOpenSigninModal}>
        <div className={styles.signinText}>I don't have an account</div>
      </button>
      <Dialog
        open={openSigninModal}
        onClose={() => handleCloseSigninModal}
        maxWidth={false}
      >
        <SignUpMenu />
      </Dialog>
    </div>
  );
};

export default LoginMenu;
