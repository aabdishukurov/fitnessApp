import React from 'react';
import styles from './profile-statistics.module.scss';
import { Hexagon } from './hexagon/Hexagon';
import { Statistics } from './statistics/Statistics';
import { Statistic } from './statistics/Statistic';

export const ProfileStatisticsEditing = () => {
  const [fitBreakLvl, setFitBreakLvl] = React.useState(true);
  return (
    <div>
      <hr className={styles.hr} />
      <div className={styles.hexagon_content}>
        <Hexagon />
        <Hexagon fitBreakLvl={fitBreakLvl} lvl={`Medium`} />
        <Hexagon />
        <Hexagon />
      </div>
      <hr className={styles.hr} />
      <div className={styles.statistics_content}>
        <Statistics title={`Статистика за сегодня`} />
        <div className={styles.statistic__content}>
          <Statistic Htitle={`15`} Ptitle={`упражнений`} />
          <Statistic Htitle={`440`} Ptitle={`Ккал сожжено`} />
          <Statistic Htitle={`10 мин`} Ptitle={`общее время`} />
        </div>
        <Statistics title={`Статистика за весь период`} />
        <div className={styles.statistic__content}>
          <Statistic Htitle={`45`} Ptitle={`упражнений`} />
          <Statistic Htitle={`2580,6`} Ptitle={`Ккал сожжено`} />
          <Statistic Htitle={`18 часов`} Ptitle={`общее время`} />
        </div>
      </div>
    </div>
  );
};
