import React from "react";
import styles from "./exerPage.module.scss";
import timerIcon from "../../assets/categories/timer.png";

const ExerPage = ({ test }) => {
  return (
    <div className={styles.exerContent}>
      <h2 className={styles.logo}>
        <span className={styles.line} />
        Упражнения и разминки
        <span className={styles.line} />
      </h2>

      <h2>
        <span className={styles.line} />
        Разминка для {test.name}
        <span className={styles.exPage} />
        <b>3-5 минут</b>
      </h2>
      <div>
        <div className={styles.exerTimer}>
          <span className={styles.exShow} />
          {/* <Timer /> */}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius
          est ducimus praesentium quibusdam unde doloribus excepturi illum
          facilis eligendi, fuga harum perferendis ratione aliquid ab qui nemo
          ipsum similique
        </p>
        {test.cons ? (
          <div className={styles.cons}>
            <span />
            <p>{test.cons}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExerPage;
