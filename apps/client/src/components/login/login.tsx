import { useRef, useState } from 'react';
import styles from './login.module.css';
import { useAppDispatch } from '../../store/store';
import { addPerson } from '../../store/features/personSlice';
import { Dialog } from '@mui/material';
import SignUpMenu from '../signUp/signUp';
import CloseIcon from '@mui/icons-material/Close';

interface LoginProps {
  handleCloseLoginModal: () => void;
}

export const LoginMenu: React.FC<LoginProps> = ({ handleCloseLoginModal }) => {
  const [openSigninModal, setOpenSignModal] = useState(false);
  const handleOpenSigninModal = () => {
    handleCloseLoginModal();
    setOpenSignModal(true);
    console.log(`${openSigninModal}`);
  };
  const handleCloseSigninModal = () => {
    setOpenSignModal(false);
  };

  const name = useRef<string>('');
  const password = useRef<string>('');
  const dispatch = useAppDispatch();
  return (
    <div className={styles.loginMenu}>
      <button
        className={styles.exitButton}
        onClick={() => handleCloseLoginModal()}
      >
        <CloseIcon />
      </button>
      <div className={styles.loginTitle}> Login </div>
      <form className={styles.loginForm}>
        <div className={styles.form}>
          <div className={styles.titleAndBox}>
            <label htmlFor="">Username</label>
            <input
              className={styles.inputBox}
              onChange={(e) => (name.current = e.target.value)}
            />
          </div>

          <div className={styles.titleAndBox}>
            <label htmlFor="">Password</label>
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
        // onClose={() => handleCloseSigninModal}
        // maxWidth={false}
      >
        <SignUpMenu />
      </Dialog>
    </div>
  );
};

export default LoginMenu;
