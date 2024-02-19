import { useRef } from 'react';
import styles from './addToast.module.css';
// import { useAppDispatch } from '../../store/store';
// import { addPerson } from '../../store/features/personSlice';

const LoginMenu = () => {
  const name = useRef<string>('');
  const password = useRef<string>('');
  // const dispatch = useAppDispatch();
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
    </div>
  );
};

export default LoginMenu;
