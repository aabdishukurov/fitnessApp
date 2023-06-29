import React from 'react';
import styles from './profile-notifications.module.scss';
import { Notification } from './notification/Notification';
import { Button } from '../profileUser/button/Button';

export const ProfileNotificationsEditing = () => {
  return (
    <div>
      <hr className={styles.hr} />
      <div className={styles.notifications_editing}>
        <Notification title={`Ежедневное уведомление разминок`} />
        <Notification title={`Уведомление по завершению разминок`} />
        <Notification title={`Уведомление на возобновление разминок`} />
        <Notification title={`Статистика в конце дня`} />
        <Notification title={`Уведомление о гидрализации`} />
        <hr className={styles.hr} />
        <Notification title={`Получать рассылки при обновлении`} />
        <Notification title={`Новости`} />
        <Notification title={`Скачивать статистику PDF`} />
        <hr className={styles.hr} />
      </div>
      <div className={styles.buttons}>
        <Button title={`Сохранить`} />
      </div>
    </div>
  );
};
