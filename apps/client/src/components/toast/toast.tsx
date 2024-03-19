import styles from './toast.module.css';

type ToastProps = {
  user: string;
  date: string;
};

export const Toast = (props: ToastProps) => {
  if (props.user === '') {
    return <div className={styles.empty_toast}></div>;
  } else {
    return (
      <div className={styles.single_toast}>
        <div className={styles.userbox}>{props.user}</div>
        <div className={styles.datebox}>{props.date}</div>
        <button className={styles.edit_button}> Edit </button>
      </div>
    );
  }
};

export default Toast;
