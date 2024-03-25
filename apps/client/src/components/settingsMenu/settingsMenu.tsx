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

interface SettingsMenuProps {
  setIsOpenSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSettingsModal: boolean;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpenSettingsModal,
  setIsOpenSettingsModal,
}) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [userToChangePrivilege, setUserToChangePrivilege] = useState(0);
  const { data: users } = useGetUsersQuery();

  const [errorMessageEditUser, setErrorMessageEditUser] = useState('');
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
            <TabList onChange={handleTabChange} orientation="vertical">
              <Tab label="Tab 1" value="1"></Tab>
              <Tab label="Edit User Infos" value="2"></Tab>
              <Tab label="Users Privileges" value="3"></Tab>
              <Tab label="Criminals" value="4"></Tab>
            </TabList>

            <TabPanel value="1">WELCOME TO MENU 1</TabPanel>
            <TabPanel value="2">
              <div className={styles.editMenu}>
                <div className={styles.editTitle}> Edit User </div>
                <div className={styles.editForm}>
                  <div className={styles.form}>
                    <div className={styles.titleAndBox}>
                      <label className={styles.labelForm} htmlFor="">
                        Username
                      </label>
                      <input
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className={styles.titleAndBox}>
                      <label className={styles.labelForm} htmlFor="">
                        First Name
                      </label>
                      <input
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>

                    <div className={styles.titleAndBox}>
                      <label className={styles.labelForm} htmlFor="">
                        Last Name
                      </label>
                      <input
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className={styles.titleAndBox}>
                      <label className={styles.labelForm} htmlFor="">
                        Password
                      </label>
                      <input
                        className={styles.inputBox}
                        defaultValue={loggedInUser.data?.password}
                        onChange={(e) => setPassword(e.target.value)}
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
                      Edit
                    </button>
                    <div className={styles.errorBox}>
                      <div className={styles.error}>{errorMessageEditUser}</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className={styles.signupMenu}>
                <div className={styles.signupTitle}> User Privileges</div>
                <div className={styles.signupForm}>
                  <div className={styles.form}>
                    <div className={styles.userAdminBox}>
                      <select
                        className={styles.inputBox}
                        name="user"
                        id="user"
                        onChange={(e) => {
                          setUserToChangePrivilege(
                            e.target.value === '1' ? 1 : 0
                          );
                          console.log(
                            `Selected user: ${userToChangePrivilege}`
                          );
                        }}
                      >
                        {!users || users.length === 0 ? (
                          <p> No user found</p>
                        ) : (
                          users.map((user: User, index: number) => (
                            <option key={index} value={index}>
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
          </div>
        </TabContext>
      </div>
    </Dialog>
  );
};

export default SettingsMenu;
