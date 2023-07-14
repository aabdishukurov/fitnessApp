import React from 'react';
import styles from './profile.module.scss';
import { ProfileHead } from './ProfileHead';
import { ProfileNotificationsEditing } from './profileNotificationsEditing/ProfileNotificationsEditing';

export const ProfileNotifications = () => {
  return (
    <div className={styles.profile}>
      <ProfileHead />
      <div className={styles.profile__editing_content}>
        <ProfileNotificationsEditing />
      </div>
    </div>
  );
};
