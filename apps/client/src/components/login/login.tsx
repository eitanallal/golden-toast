import { useRef } from 'react';
import styles from './login.module.css';
// import { useAppDispatch } from '../../store/store';
// import { addPerson } from '../../store/features/personSlice';
import { Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface LoginProps {
  setIsOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenLoginModal: boolean;
  setIsOpenSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginMenu: React.FC<LoginProps> = ({
  setIsOpenLoginModal,
  isOpenLoginModal,
  setIsOpenSignUpModal,
}) => {
  const handleOpenSignUpModal = () => {
    setIsOpenSignUpModal(true);
    setIsOpenLoginModal(false);
  };

  const name = useRef<string>('');
  const password = useRef<string>('');
  // const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isOpenLoginModal}
      onClose={() => setIsOpenLoginModal(false)}
      maxWidth={false}
    >
      <div className={styles.loginMenu}>
        <button
          className={styles.exitButton}
          onClick={() => setIsOpenLoginModal(false)}
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
            {/* <button
            className={styles.validationButton}
            onClick={() =>
              dispatch(
                addPerson({ name: name.current, password: password.current })
              )
            }
          >
            Add
          </button> */}
          </div>
        </form>
        <button
          className={styles.signinButton}
          onClick={() => handleOpenSignUpModal()}
        >
          <div className={styles.signinText}>I don't have an account</div>
        </button>
      </div>
    </Dialog>
  );
};

export default LoginMenu;
