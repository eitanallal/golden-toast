import React, { useState } from 'react';
import styles from './addToast.module.css';
import { Dialog } from '@mui/material';
import {
  useGetUsersQuery,
  useAddMutation,
  useLoginMutation,
} from '../../store';
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

  const [addToast, result] = useAddMutation({});
  const { data: users } = useGetUsersQuery();
  const [login, loginResult] = useLoginMutation({
    fixedCacheKey: 'login-key',
  });

  const handleAddToast = async () => {
    if (!loginResult.data?.isAdmin && loginResult.data?.id) {
      setUser(loginResult.data?.id);
    }
    addToast({
      date: date,
      userId: user,
      hasHappened: true,
    })
      .unwrap()
      .then((result) => {
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
              <label htmlFor="user">שם משתמש</label>
              {!loginResult.data ? (
                <div className={styles.inputBox}>
                  Need to login in order to add toasts
                </div>
              ) : !loginResult.data.isAdmin ? (
                <select
                  className={styles.inputBox}
                  name="user"
                  id="user"
                  onChange={(e) => setUser(e.target.value)}
                >
                  <option value={loginResult.data.id}>
                    {loginResult.data.username}
                  </option>
                </select>
              ) : (
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
              )}

              <label htmlFor="date">תאריך</label>
              <input
                id="date"
                name="date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className={styles.inputBox}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.validationButtonContainer}>
            <button
              className={styles.validationButton}
              onClick={() => {
                handleAddToast();
              }}
            >
              להוסיף
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddToast;
