import React from 'react';
import styles from './profile-logo.module.scss';

export const ProfileLogo = () => {
  return (
    <div className={`${styles.profile__logo} ${styles.logo}`}>
      <span className={styles.logo__name}>FitBreak</span>
      <div className={styles.logo__profile}>
        <i className={styles.logo__icon} />
        PROfile
      </div>
    </div>
  );
};
