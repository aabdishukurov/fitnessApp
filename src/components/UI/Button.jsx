<<<<<<<< HEAD:src/components/categories/button/Button.jsx
import React from 'react';
import styles from '../categories.module.scss';

export const Button = () => {
  return (
    <button className={styles.categories__link}>
      <div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1875 14.9374C0.905708 14.9374 0.635457 14.8255 0.436199 14.6262C0.236942 14.427 0.125 14.1567 0.125 13.8749V1.12492C0.125097 0.94388 0.171452 0.765867 0.259666 0.607772C0.34788 0.449677 0.475028 0.316745 0.629044 0.221589C0.783061 0.126433 0.958837 0.0722102 1.13969 0.0640645C1.32055 0.0559188 1.50049 0.0941207 1.66244 0.175046L14.4124 6.55005C14.5887 6.63838 14.7369 6.77401 14.8404 6.94176C14.944 7.10952 14.9989 7.30277 14.9989 7.49992C14.9989 7.69707 14.944 7.89033 14.8404 8.05808C14.7369 8.22583 14.5887 8.36146 14.4124 8.44979L1.66244 14.8248C1.515 14.8986 1.3524 14.9372 1.1875 14.9374Z"
            fill="none"
          />
        </svg>
      </div>
      Начать разминку
    </button>
  );
};
========
import React from 'react';

export const Button = () => {
  return (
    <button className="categories__link">
      <div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1875 14.9374C0.905708 14.9374 0.635457 14.8255 0.436199 14.6262C0.236942 14.427 0.125 14.1567 0.125 13.8749V1.12492C0.125097 0.94388 0.171452 0.765867 0.259666 0.607772C0.34788 0.449677 0.475028 0.316745 0.629044 0.221589C0.783061 0.126433 0.958837 0.0722102 1.13969 0.0640645C1.32055 0.0559188 1.50049 0.0941207 1.66244 0.175046L14.4124 6.55005C14.5887 6.63838 14.7369 6.77401 14.8404 6.94176C14.944 7.10952 14.9989 7.30277 14.9989 7.49992C14.9989 7.69707 14.944 7.89033 14.8404 8.05808C14.7369 8.22583 14.5887 8.36146 14.4124 8.44979L1.66244 14.8248C1.515 14.8986 1.3524 14.9372 1.1875 14.9374Z"
            fill="none"
          />
        </svg>
      </div>
      Начать разминку
    </button>
  );
};
>>>>>>>> 1a4627ae5629d5a21e0094b636b5c3bd2195c439:src/components/UI/Button.jsx
