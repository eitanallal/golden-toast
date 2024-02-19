import { useRef } from 'react';
import styles from './signUp.module.css';
import { useAppDispatch } from '../../store/store';
import { signUpUser } from '../../store/features/personSlice';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';

interface SignUpProps {
  setIsOpenSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSignUpModal: boolean;
}

export const SignUpMenu: React.FC<SignUpProps> = ({
  setIsOpenSignUpModal,
  isOpenSignUpModal,
}) => {
  const username = useRef<string>('');
  const firstName = useRef<string>('');
  const lastName = useRef<string>('');
  const password = useRef<string>('');
  const isAdmin = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={isOpenSignUpModal}
      onClose={() => setIsOpenSignUpModal(false)}
      maxWidth={false}
    >
      <div className={styles.signupMenu}>
        <button
          className={styles.exitButton}
          onClick={() => setIsOpenSignUpModal(false)}
        >
          <CloseIcon />
        </button>
        <div className={styles.signupTitle}> Sign Up </div>
        <form className={styles.signupForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label htmlFor="">Username</label>
              <input
                className={styles.inputBox}
                onChange={(e) => (username.current = e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label htmlFor="">First Name</label>
              <input
                className={styles.inputBox}
                onChange={(e) => (firstName.current = e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label htmlFor="">Last Name</label>
              <input
                className={styles.inputBox}
                onChange={(e) => (lastName.current = e.target.value)}
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
                  signUpUser({
                    username: username.current,
                    firstname: firstName.current,
                    lastname: lastName.current,
                    password: password.current,
                    isAdmin: isAdmin.current,
                  })
                )
              }
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default SignUpMenu;
