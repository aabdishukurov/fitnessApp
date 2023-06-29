import React from 'react';
import styles from './select.module.scss';

export const Select = ({ title, value }) => {
  return (
    <>
      <div className={styles.select}>
        <h3>{title}</h3>
        <svg
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_954_12799"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="7"
            y="11"
            width="22"
            height="14"
          >
            <path
              d="M26.75 13.8545L18 22.6045L9.25 13.8545H26.75Z"
              fill="white"
              stroke="white"
              stroke-width="4"
              stroke-linejoin="round"
            />
          </mask>
          <g mask="url(#mask0_954_12799)">
            <path
              d="M0.5 0H35.5V35H0.5V0Z"
              fill="url(#paint0_linear_954_12799)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_954_12799"
              x1="1.52786"
              y1="35"
              x2="37.4767"
              y2="35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0164E7" />
              <stop offset="1" stop-color="#019CF4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.label_top}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          {value}
        </label>
      </div>
    </>
  );
};
