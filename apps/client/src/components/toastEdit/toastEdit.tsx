import { Dialog, IconButton, Switch } from '@mui/material';
import styles from './toastEdit.module.css';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useDeleteMutation,
  useAddCriminalMutation,
  useEditToastMutation,
  useLazyGetUserStatusQuery,
} from '../../store';

type ToastEditProps = {
  date: string;
  toastId: string;
  userId: string;
  hasHappened: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToastEdit: React.FC<ToastEditProps> = ({
  date,
  userId,
  toastId,
  hasHappened,
  isOpen,
  setIsOpen,
}) => {
  const [addCriminal, resultAddCriminal] = useAddCriminalMutation();
  const [editToast, result] = useEditToastMutation({
    fixedCacheKey: 'edit-toast-mutation',
  });
  const [deleteToast, resultDeletion] = useDeleteMutation();
  const [trigger, userResult] = useLazyGetUserStatusQuery();

  const [isChecked, setIsChecked] = useState<boolean>(hasHappened);
  useEffect(() => {
    setIsChecked(hasHappened);
  }, [hasHappened, isOpen]);

  const handleDelete = async () => {
    deleteToast({ id: toastId }).unwrap();
    setIsOpen(false);
  };
  const handleEdit = async () => {
    editToast({
      id: toastId,
      date: date,
      hasHappened: isChecked,
    }).unwrap();
    if (!isChecked) {
      trigger(userId);
      if (!userResult.data)
        addCriminal({ userId: userId, isPersonNonGrata: false });
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth={false}>
      <div className={styles.editToastMenu}>
        <div className={styles.editToastTitle}>Edit Toast</div>
        <div className={styles.editToastForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label className={styles.labelForm} htmlFor="">
                תאריך
              </label>
              <input
                type="date"
                defaultValue={date}
                className={styles.inputBox}
                onChange={(e) => (date = e.target.value)}
              />
            </div>

            <div className={styles.titleAndBox}>
              <label className={styles.labelForm} htmlFor="">
                קרה
              </label>
              <Switch
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
              />
            </div>
          </div>
          <div className={styles.validationButtonContainer}>
            <div
              className={styles.validationButton}
              onClick={() => {
                handleEdit();
              }}
            >
              שלח
            </div>

            <IconButton
              className={styles.iconButton}
              sx={{ fontSize: '2rem', color: 'red', alignSelf: 'right' }}
              onClick={() => {
                handleDelete();
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ToastEdit;
