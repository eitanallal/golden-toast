import { useState } from 'react';
import styles from './signUp.module.css';
import { useAppDispatch, signUpUser, useSignUpMutation } from '../../store';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, IconButton, Tooltip } from '@mui/material';
import { User } from '../../types/user.types';
interface SignUpProps {
  setIsOpenSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSignUpModal: boolean;
}

export const SignUpMenu: React.FC<SignUpProps> = ({
  setIsOpenSignUpModal,
  isOpenSignUpModal,
}) => {
  const [username, setUsername] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<string>('');
  const dispatch = useAppDispatch();

  const [signUp, result] = useSignUpMutation({
    // fixedCacheKey: 'sign-up-result',
  });

  const handleSignUp = async () => {
    signUp({
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
      isAdmin: isAdmin,
    })
      .unwrap()
      .catch((error) => {
        if (error.data.message) {
          setSignUpError(error.data.message[0]);
        }
        if (error.status === 500) {
          setSignUpError('Username already in use');
        }
      });
  };

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
          <Tooltip title="Exit">
            <IconButton className={styles.iconButton}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </button>
        <div className={styles.signupTitle}> הרשם </div>
        <div className={styles.signupForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label htmlFor="username">שם משתמש</label>
              <input
                id="username"
                name="username"
                className={styles.inputBox}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label htmlFor="firstname">שם פרטי</label>
              <input
                id="firstname"
                name="firstname"
                className={styles.inputBox}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label htmlFor="lastname">שם משפחה</label>
              <input
                id="lastname"
                name="lastname"
                className={styles.inputBox}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label htmlFor="password">סיסמה</label>
              <input
                id="password"
                name="password"
                type="password"
                className={styles.inputBox}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.validationButtonContainer}>
            <button
              className={styles.validationButton}
              onClick={() => {
                handleSignUp();
              }}
            >
              הרשם
            </button>
            <div className={styles.errorBox}>
              <div className={styles.error}>{signUpError}</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SignUpMenu;
