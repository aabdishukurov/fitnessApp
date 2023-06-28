import React from 'react';
import styles from './profile.module.scss';
import { ProfileHead } from './ProfileHead';
import { ProfileStatisticsEditing } from './profileStatisticsEditing/ProfileStatisticsEditing';

export const ProfileStatistics = () => {
  return (
    <div className={styles.profile}>
      <ProfileHead />
      <div className={styles.profile__editing_content}>
        <ProfileStatisticsEditing />
      </div>
    </div>
  );
};
