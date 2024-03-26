import { Dialog, Switch } from '@mui/material';
import styles from './toastEdit.module.css';
import { useEditToastMutation } from '../../store/services/toasts.api';
import { useEffect, useState } from 'react';

type ToastEditProps = {
  date: string;
  toastId: string;
  hasHappened: boolean;
  editToastModal: boolean;
  setEditToastModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToastEdit: React.FC<ToastEditProps> = ({
  date,
  toastId,
  hasHappened,
  editToastModal,
  setEditToastModal,
}) => {
  const [editToast, result] = useEditToastMutation({
    fixedCacheKey: 'edit-toast-mutation',
  });
  const [checked, setChecked] = useState<boolean>(hasHappened);
  useEffect(() => {
    setChecked(hasHappened);
    return;
  }, [hasHappened, editToastModal]);

  const handleEdit = async () => {
    editToast({
      id: toastId,
      date: date,
      hasHappened: checked,
    }).unwrap();
    setEditToastModal(false);
  };

  return (
    <Dialog
      open={editToastModal}
      onClose={() => setEditToastModal(false)}
      maxWidth={false}
    >
      <div className={styles.editToastMenu}>
        <p className={styles.editToastTitle}>Edit Toast</p>
        <div className={styles.editToastForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label className={styles.labelForm} htmlFor="">
                New date
              </label>
              <input
                type="date"
                // min={new Date().toISOString().split('T')[0]}
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
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
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
              Send update
            </button>
            {/* <div className={styles.errorBox}>
              <div className={styles.error}>{errorMessageEditUser}</div>
            </div> */}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ToastEdit;
