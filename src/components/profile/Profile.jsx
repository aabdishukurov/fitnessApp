import React from 'react';
import styles from './profile.module.scss';
import { ProfileHead } from './ProfileHead';
import { ProfileEditing } from './profileEditing/ProfileEditing';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileHead />
      <div className={styles.profile__editing_content}>
        <ProfileEditing />
      </div>
    </div>
  );
};
