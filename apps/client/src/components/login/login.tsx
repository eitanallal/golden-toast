import { useState } from 'react';
import styles from './login.module.css';
import { Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLoginMutation, useAppDispatch, loginUser } from '../../store';

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

  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>(''); //shared cache key

  const [login, result] = useLoginMutation({ fixedCacheKey: 'login-key' });
  const [loginError, setLoginError] = useState<string>('');

  const handleLogin = () => {
    login({
      username: username,
      password: password,
    })
      .unwrap()
      .then((result) => {
        setIsOpenLoginModal(false);
        if (
          result.username &&
          result.firstName &&
          result.lastName &&
          result.password
        )
          dispatch(
            loginUser({
              id: result.id,
              username: result.username,
              firstName: result.firstName,
              lastName: result.lastName,
              password: result.password,
              isAdmin: result.isAdmin,
            })
          );
      })
      .catch((error) => {
        if (error) {
          setLoginError(error.data.message);
        }
        if (username.length === 0) {
          setLoginError('the username is empty !');
        }
        if (password.length === 0) {
          setLoginError('the password is empty !');
        }
        if (password.length === 0 && username.length === 0) {
          setLoginError('username and password are empty !');
        }
        if (error.status === 500) {
          setLoginError('An unexpected error happened');
        }
      });
  };
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
        <div className={styles.loginForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label htmlFor="">Username</label>
              <input
                className={styles.inputBox}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label htmlFor="">Password</label>
              <input
                className={styles.inputBox}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.validationButtonContainer}>
            <button
              className={styles.validationButton}
              onClick={() => {
                handleLogin();
              }}
            >
              Add
            </button>
            <div className={styles.errorBox}>
              <div className={styles.error}>{loginError}</div>
            </div>
          </div>
        </div>
        <button
          className={styles.signinButton}
          onClick={() => handleOpenSignUpModal()}
        >
          <div className={styles.signUpButton}>
            Don't have an account ? Sign up here !
          </div>
        </button>
      </div>
    </Dialog>
  );
};

export default LoginMenu;
