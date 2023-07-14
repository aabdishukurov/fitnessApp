import React from 'react';
import styles from './title.module.scss';

export const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <div></div>
      <h1>{title}</h1>
      <div></div>
    </div>
  );
};
