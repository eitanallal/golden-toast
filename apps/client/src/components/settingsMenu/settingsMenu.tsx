import React, { useState } from 'react';
import styles from './settingsMenu.module.css';
import { Dialog } from '@mui/material';

interface SettingsMenuProps {
  setIsOpenSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenSettingsModal: boolean;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpenSettingsModal,
  setIsOpenSettingsModal,
}) => {
  return (
    <Dialog
      open={isOpenSettingsModal}
      onClose={() => setIsOpenSettingsModal(false)}
      maxWidth={false}
    >
      <div className={styles.addToastMenu}>
        <div className={styles.addToastTitle}> Settings </div>
        <div className={styles.addToastForm}>
          <div className={styles.form}>
            <div className={styles.titleAndBox}>
              <label htmlFor="">username</label>
              <label htmlFor="">Date</label>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SettingsMenu;
