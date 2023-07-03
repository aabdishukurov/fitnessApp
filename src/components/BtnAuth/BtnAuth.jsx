import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnAuth.module.scss";
const BtnAuth = ({ value, to, handleSubmit }) => {
  return (
    <>
      {to ? (
        <Link className={styles.btnEnter} to={to}>
          {value}
        </Link>
      ) : (
        <button onClick={handleSubmit} className={styles.registerBtn}>
          {value}
        </button>
      )}
    </>
  );
};

export default BtnAuth;
