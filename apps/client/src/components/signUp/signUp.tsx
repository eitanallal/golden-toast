import { useRef } from 'react';
import styles from './signUp.module.css';
import { useAppDispatch } from '../../store/store';
import { signUpUser } from '../../store/features/personSlice';

const SignUpMenu = () => {
  const username = useRef<string>('');
  const firstName = useRef<string>('');
  const lastName = useRef<string>('');
  const password = useRef<string>('');
  const isAdmin = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.signupMenu}>
      <div className={styles.signupTitle}> Sign in </div>
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
  );
};

export default SignUpMenu;
