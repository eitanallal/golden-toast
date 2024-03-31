import React, { useState } from 'react';
import styles from './addToast.module.css';
import { Dialog } from '@mui/material';
import { useGetUsersQuery, useAddMutation } from '../../store';
import { User } from '../../types/user.types';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface AddToastProps {
  setIsOpenAddToastModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenAddToastModal: boolean;
}

export const AddToast: React.FC<AddToastProps> = ({
  isOpenAddToastModal,
  setIsOpenAddToastModal,
}) => {
  const [user, setUser] = useState('');
  const [date, setDate] = useState('');

  const [addToast, result] = useAddMutation({
    // fixedCacheKey: 'add-toast-result',
  });

  const { data: users } = useGetUsersQuery();
  const handleAddToast = async () => {
    addToast({
      date: date,
      userId: user,
      hasHappened: true,
    })
      .unwrap()
      .then((result) => {
        console.log('added toast successfully');
        toast.success(`Toast added successfully: ${result}`, {
          className: 'styles.toastifyWindow',
        });
      });
    setIsOpenAddToastModal(false);
  };

  return (
    <Dialog
      open={isOpenAddToastModal}
      onClose={() => setIsOpenAddToastModal(false)}
      maxWidth={false}
    >
      <div className={styles.addToastMenu}>
        <div className={styles.addToastTitle}> להוסיף שתייה </div>
        <div className={styles.addToastForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label htmlFor="">שם משתמש</label>
              <select
                className={styles.inputBox}
                name="user"
                id="user"
                onChange={(e) => setUser(e.target.value)}
              >
                {!users || users.length === 0 ? (
                  <p> No user found</p>
                ) : (
                  users.map((user: User, index: number) => (
                    <option key={index} value={user.id}>
                      {user.username}
                    </option>
                  ))
                )}
              </select>

              <label htmlFor="">תעריך</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className={styles.inputBox}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.validationButtonContainer}>
            <div
              className={styles.validationButton}
              onClick={() => {
                handleAddToast();
              }}
            >
              להוסיף
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddToast;
