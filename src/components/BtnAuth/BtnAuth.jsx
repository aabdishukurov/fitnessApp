import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnAuth.module.scss";
const BtnAuth = ({ value, to, handleSubmit, data }) => {
  return (
    <>
      {to ? (
        <Link
          className={value === "Войти" ? styles.btnEnter : styles.registerBtn}
          to={to}
        >
          {value}
        </Link>
      ) : (
        <button
          onClick={handleSubmit}
          className={
            value === "Зарегистрироваться"
              ? styles.registerBtn
              : styles.btnEnter
          }
        >
          {value}
        </button>
      )}
    </>
  );
};

export default BtnAuth;
