import React, { useState } from 'react';
import styles from './addToast.module.css';
import { Dialog } from '@mui/material';
import { useAddMutation } from '../../store/services/toasts.api';
import { useGetUsersQuery } from '../../store';
import { User } from '../../types/user.types';

interface AddToastProps {
  setIsOpenAddToastModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenAddToastModal: boolean;
}

const AddToast: React.FC<AddToastProps> = ({
  isOpenAddToastModal,
  setIsOpenAddToastModal,
}) => {
  const [user, setUser] = useState('');
  const [date, setDate] = useState('');

  const [addToast, result] = useAddMutation({
    fixedCacheKey: 'add-toast-result',
  });

  const { data: users } = useGetUsersQuery();
  console.log(new Date().toISOString().split('T')[0]);
  const handleAddToast = async () => {
    addToast({
      date: date,
      userId: user,
      hasHappened: true,
    })
      .unwrap()
      .then((result) => {
        console.log('added toast successfully');
      });
    {
      /*}.catch((error) => {
        if (error.data.message) {
          setSignUpError(error.data.message[0]);
        }
        if (error.status === 500) {
          setSignUpError('Username already in use');
        }
      });*/
    }
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
              <label htmlFor="">username</label>
              <select
                className={styles.inputBox}
                name="user"
                id="user"
                onChange={(e) => setUser(e.target.value)}
              >
                {users === undefined ? (
                  <p> No user found</p>
                ) : (
                  users.map((user: User) => (
                    <option value={user.id}>{user.username}</option>
                  ))
                )}
              </select>

              {/* <input
                className={styles.inputBox}
                onChange={(e) => setUser(e.target.value)}
              /> */}

              <label htmlFor="">Date</label>
              <input
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
              Add
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddToast;
