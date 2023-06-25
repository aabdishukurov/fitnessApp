import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnAuth.module.scss";
const BtnAuth = ({ value, to, handleSubmit, className }) => {
  return (
    <>
      {!to ? (
        <button onClick={handleSubmit} className={styles.btnEnter}>
          {value}
        </button>
      ) : (
        <Link className={styles.registerBtn} to={to}>
          {value}
        </Link>
      )}
    </>
  );
};

export default BtnAuth;
