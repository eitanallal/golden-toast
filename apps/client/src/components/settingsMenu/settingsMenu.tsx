import React, { useState } from 'react';
import styles from './settingsMenu.module.css';
import { Dialog, Switch, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import {
  useEditMutation,
  useGetUsersQuery,
  useLoginMutation,
} from '../../store';
import { User } from '../../types/user.types';
import { CriminalsStatus } from '../';

interface SettingsMenuProps {
  setIsOpenSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSettingsModal: boolean;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpenSettingsModal,
  setIsOpenSettingsModal,
}) => {
  const [username, setUsername] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userToChangePrivilege, setUserToChangePrivilege] = useState(0);
  const { data: users } = useGetUsersQuery();

  const [errorMessageEditUser, setErrorMessageEditUser] = useState<string>();
  const [tabSelector, setTabSelector] = useState('1');
  const handleTabChange = (event: React.SyntheticEvent, newTab: string) => {
    setTabSelector(newTab);
  };
  const [editUser, result] = useEditMutation({
    fixedCacheKey: 'edit-user-key',
  });

  const [loginUser, loggedInUser] = useLoginMutation({
    fixedCacheKey: 'login-key',
  });

  const handleEdit = async () => {
    if (loggedInUser.data?.id) {
      editUser({
        id: loggedInUser.data?.id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        isAdmin: false,
      }).unwrap();
    } else {
      setErrorMessageEditUser('You are not logged in !');
    }
  };

  const handleChangeUserPrivileges = async () => {
    if (users) {
      editUser({
        id: users[userToChangePrivilege].id,
        isAdmin: !users[userToChangePrivilege].isAdmin,
      });
    }
  };

  return (
    <Dialog
      open={isOpenSettingsModal}
      onClose={() => setIsOpenSettingsModal(false)}
      maxWidth={false}
    >
      <div className={styles.settingsWindow}>
        <TabContext value={tabSelector}>
          <div className={styles.settingsMenu}>
            <TabList
              onChange={handleTabChange}
              orientation="vertical"
              sx={{ maxWidth: '20%' }}
            >
              <Tab className={styles.tab} label="אודות" value="1"></Tab>
              <Tab
                className={styles.tab}
                label="עריכת נתוני משתמש"
                value="2"
              ></Tab>
              <Tab
                className={styles.tab}
                label="הרשאות משתמשים "
                value="3"
                disabled={!loggedInUser.data || !loggedInUser.data?.isAdmin}
              ></Tab>
              <Tab
                className={styles.tab}
                label="עבריינים"
                value="4"
                disabled={!loggedInUser.data || !loggedInUser.data?.isAdmin}
              ></Tab>
            </TabList>

            <TabPanel value="1">
              <div className={styles.tabName}>
                ברוכים הבאים לפרויקט שתיות של ה חפיפה של איתן אלאל.{' '}
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className={styles.tabMenu}>
                <div className={styles.tabName}> עריכת נתוני משתמש </div>
                <div className={styles.tabForm}>
                  <div className={styles.form}>
                    <div className={styles.titleAndBox}>
                      <input
                        id="username"
                        name="username"
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label className={styles.labelForm} htmlFor="username">
                        שם משתמש
                      </label>
                    </div>

                    <div className={styles.titleAndBox}>
                      <input
                        id="firstname"
                        name="firstname"
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label className={styles.labelForm} htmlFor="firstname">
                        שם פרטי
                      </label>
                    </div>

                    <div className={styles.titleAndBox}>
                      <input
                        id="lastname"
                        name="lastname"
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label className={styles.labelForm} htmlFor="lastname">
                        שם משפחה
                      </label>
                    </div>

                    <div className={styles.titleAndBox}>
                      <input
                        id="password"
                        name="password"
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                      />
                      <label className={styles.labelForm} htmlFor="password">
                        סיסמה
                      </label>
                    </div>
                  </div>
                  <div className={styles.validationButtonContainer}>
                    <div
                      className={styles.validationButton}
                      onClick={() => {
                        handleEdit();
                      }}
                    >
                      עריכה
                    </div>
                    <div className={styles.errorBox}>
                      <div className={styles.error}>{errorMessageEditUser}</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className={styles.tabMenu}>
                <div className={styles.tabName}> הרשאות משתמשים </div>
                <div className={styles.tabForm}>
                  <div className={styles.form}>
                    <div className={styles.userAdminBox}>
                      <select
                        className={styles.inputBox}
                        name="user"
                        id="user"
                        onChange={(e) => {
                          setUserToChangePrivilege(
                            e.target.value === '1'
                              ? parseInt(e.target.value)
                              : 0
                          );
                        }}
                      >
                        {!users || users.length === 0 ? (
                          <p> No user found</p>
                        ) : (
                          users.map((user: User, index: number) => (
                            <option key={user.id} value={index}>
                              {user.username}
                            </option>
                          ))
                        )}
                      </select>

                      <Switch
                        checked={
                          users ? users[userToChangePrivilege].isAdmin : false
                        }
                        onChange={handleChangeUserPrivileges}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="4">
              <CriminalsStatus />
            </TabPanel>
          </div>
        </TabContext>
      </div>
    </Dialog>
  );
};

export default SettingsMenu;
