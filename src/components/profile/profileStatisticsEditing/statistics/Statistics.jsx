import React from 'react';
import styles from './statistics.module.scss';

export const Statistics = ({ title }) => {
  return (
    <>
      <div className={styles.statistics}>
        <div></div>
        <h3>{title}</h3>
      </div>
    </>
  );
};
