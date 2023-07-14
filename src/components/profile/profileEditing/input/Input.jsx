import React from 'react';
import styles from './input.module.scss';

export const Input = ({ title, type, value, onChange }) => {
  return (
    <div className={styles.input}>
      <div className={styles.input__title}>
        <p>{title}</p>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2606 1.34397C20.5341 1.07058 20.905 0.916992 21.2917 0.916992C21.6784 0.916992 22.0492 1.07058 22.3227 1.34397L28.156 7.17731C28.4294 7.45078 28.583 7.82165 28.583 8.20835C28.583 8.59505 28.4294 8.96591 28.156 9.23939L9.19771 28.1977C8.92428 28.4712 8.55341 28.6249 8.16667 28.625H2.33333C1.94656 28.625 1.57563 28.4714 1.30214 28.1979C1.02865 27.9244 0.875 27.5535 0.875 27.1667V21.3333C0.875083 20.9466 1.02878 20.5757 1.30229 20.3023L15.8856 5.71897L20.2606 1.34397ZM16.9167 8.8121L3.79167 21.9371V25.7083H7.56292L20.6879 12.5833L16.9167 8.8121ZM22.75 10.5213L25.0629 8.20835L21.2917 4.4371L18.9788 6.75001L22.75 10.5213Z"
            fill="url(#paint0_linear_954_12778)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_954_12778"
              x1="1.68871"
              y1="28.625"
              x2="30.1479"
              y2="28.625"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0164E7" />
              <stop offset="1" stop-color="#019CF4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.input__editing_input}>
        <input type={type} value={value} onChange={onChange} />
      </div>
    </div>
  );
};
