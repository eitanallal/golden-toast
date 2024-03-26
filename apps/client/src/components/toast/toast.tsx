import { useState } from 'react';
import styles from './toast.module.css';
import { ToastEdit } from '../';
import EditIcon from '@mui/icons-material/Edit';

type ToastProps = {
  toastId: string;
  username: string;
  date: string;
  hasHappened: boolean;
};

export const Toast: React.FC<ToastProps> = ({
  username,
  date,
  toastId,
  hasHappened,
}) => {
  const [editToastModal, setEditToastModal] = useState(false);
  if (username === '') {
    return <div className={styles.empty_toast}></div>;
  } else {
    return (
      <div className={styles.single_toast}>
        <div className={styles.userbox}>{username}</div>
        <div className={styles.datebox}>{date}</div>
        <EditIcon
          className={styles.edit_button}
          onClick={() => setEditToastModal(true)}
        ></EditIcon>
        <ToastEdit
          date={date}
          toastId={toastId}
          hasHappened={hasHappened}
          editToastModal={editToastModal}
          setEditToastModal={setEditToastModal}
        />
      </div>
    );
  }
};

export default Toast;
