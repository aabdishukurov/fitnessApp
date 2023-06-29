import React from 'react';
import styles from './profile-navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const ProfileNavigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? styles.navigation__active : styles.navigation__not_active
        }
      >
        Профиль
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive ? styles.navigation__active : styles.navigation__not_active
        }
      >
        Уведомления
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? styles.navigation__active : styles.navigation__not_active
        }
      >
        Статистика
      </NavLink>
    </div>
  );
};
