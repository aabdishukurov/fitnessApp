import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnAuth.module.scss";
const BtnAuth = ({ className, value, to, handleSubmit }) => {
  return (
    <>
      {!to ? (
        <button onClick={handleSubmit} className={className}>
          {value}
        </button>
      ) : (
        <Link className={className} to={to}>
          {value}
        </Link>
      )}
    </>
  );
};

export default BtnAuth;
