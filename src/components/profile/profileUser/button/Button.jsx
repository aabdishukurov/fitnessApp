import React from 'react';
import styles from './button.module.scss';

export const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
};
