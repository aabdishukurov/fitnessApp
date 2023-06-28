import React from 'react';
import styles from './profile-user.module.scss';
import Avatar from '../../../assets/profile/avatar.png';
import { Button } from './button/Button';

export const ProfileUser = () => {
  return (
    <div className={styles.profile__user}>
      <div className={styles.profile__user__right_side}>
        <img src={Avatar} alt="avatar" />
        <div className={styles.pro}>
          <svg
            width="36"
            height="33"
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 7.25391L12.8125 0.691406H13.1875L16.5 7.25391H9.5ZM12.0625 22.0664L1.28125 9.12891H12.0625V22.0664ZM13.9375 22.0664V9.12891H24.7188L13.9375 22.0664ZM18.5625 7.25391L15.3125 0.691406H21.75L25.0312 7.25391H18.5625ZM0.96875 7.25391L4.25 0.691406H10.6875L7.4375 7.25391H0.96875Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.camera}>
          <svg
            width="36"
            height="33"
            viewBox="0 0 36 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.02 4.29004H26.488L24.3241 1.93413C23.9988 1.57707 23.6027 1.29177 23.161 1.09645C22.7193 0.901135 22.2417 0.800102 21.7587 0.799805H14.3594C13.3822 0.799805 12.4398 1.21863 11.7767 1.93413L9.63017 4.29004H4.09815C2.17852 4.29004 0.60791 5.86065 0.60791 7.78027V28.7217C0.60791 30.6413 2.17852 32.2119 4.09815 32.2119H32.02C33.9397 32.2119 35.5103 30.6413 35.5103 28.7217V7.78027C35.5103 5.86065 33.9397 4.29004 32.02 4.29004ZM18.0591 26.9766C13.2426 26.9766 9.3335 23.0675 9.3335 18.251C9.3335 13.4345 13.2426 9.52539 18.0591 9.52539C22.8756 9.52539 26.7847 13.4345 26.7847 18.251C26.7847 23.0675 22.8756 26.9766 18.0591 26.9766Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={styles.profile__user__left_side}>
        <div>
          <h2>Камилла Кей</h2>
        </div>
        <div className={styles.buttons}>
          <Button title={`Сменить фото`} />
          <Button title={`Удалить фото`} />
        </div>
      </div>
    </div>
  );
};
