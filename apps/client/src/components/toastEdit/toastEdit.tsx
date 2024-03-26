import { Dialog, Switch } from '@mui/material';
import styles from './toastEdit.module.css';
import {
  useDeleteMutation,
  useEditToastMutation,
} from '../../store/services/toasts.api';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

type ToastEditProps = {
  date: string;
  toastId: string;
  hasHappened: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToastEdit: React.FC<ToastEditProps> = ({
  date,
  toastId,
  hasHappened,
  isOpen,
  setIsOpen,
}) => {
  const [editToast, result] = useEditToastMutation({
    fixedCacheKey: 'edit-toast-mutation',
  });
  const [deleteToast, resultDeletion] = useDeleteMutation();
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
                New date
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
                Happened
              </label>
              <Switch
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
              />
            </div>
          </div>
          <div className={styles.validationButtonContainer}>
            <button
              className={styles.validationButton}
              onClick={() => {
                handleEdit();
              }}
            >
              שלח
            </button>

            <DeleteIcon
              sx={{ fontSize: '2rem', color: 'red', alignSelf: 'right' }}
              onClick={() => {
                handleDelete();
              }}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ToastEdit;
