import React from 'react';
import styles from './hexagon.module.scss';

export const Hexagon = ({ fitBreakLvl, lvl }) => {
  return (
    <div className={styles.hexagon_wrapper}>
      <div
        className={fitBreakLvl ? styles.hexagonfitBreakLvlOn : styles.hexagon}
      >
        {fitBreakLvl && (
          <div className={styles.hexagon_wrapper__title_content}>
            <p>Уровень:</p>
            <h3>{lvl}</h3>
          </div>
        )}
      </div>
    </div>
  );
};
