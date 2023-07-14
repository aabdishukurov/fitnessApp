import React from 'react';
import styles from './notification.module.scss';

export const Notification = ({ title }) => {
  return (
    <div className={styles.notification}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};
