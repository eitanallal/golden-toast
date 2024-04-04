import { useState } from 'react';
import styles from './toast.module.css';
import { ToastEdit } from '../';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip } from '@mui/material';
import { User } from '../../types/user.types';

type ToastProps = {
  toastId: string;
  user?: User;
  date: string;
  hasHappened: boolean;
};

export const Toast: React.FC<ToastProps> = ({
  user,
  date,
  toastId,
  hasHappened,
}) => {
  const [isEditToastModal, setIsEditToastModal] = useState(false);
  if (!user) {
    return <div className={styles.empty_toast}></div>;
  } else {
    return (
      <div className={styles.single_toast}>
        <div className={styles.userbox}>{user.username}</div>
        <div className={styles.datebox}>{date}</div>
        <Tooltip title="Edit" placement="right">
          <IconButton
            sx={{
              height: '1.8rem',
              width: '1.8rem',
              color: 'black',
              ':hover': {
                transform: 'scale',
                background: 'rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={() => setIsEditToastModal(true)}
            className={styles.edit_button}
          >
            <EditIcon sx={{ height: '1.2rem', width: '1.2rem' }} />
          </IconButton>
        </Tooltip>

        <ToastEdit
          userId={user.id}
          date={date}
          toastId={toastId}
          hasHappened={hasHappened}
          isOpen={isEditToastModal}
          setIsOpen={setIsEditToastModal}
        />
      </div>
    );
  }
};

export default Toast;
