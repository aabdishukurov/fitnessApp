import React from 'react';
import styles from './statistics.module.scss';

export const Statistic = ({ Htitle, Ptitle }) => {
  return (
    <div className={styles.statistic}>
      <h3>{Htitle}</h3>
      <p>{Ptitle}</p>
    </div>
  );
};
