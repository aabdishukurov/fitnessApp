import React from "react";
import hideIcon from "../../assets/categories/hide-icon.svg";
import eyeSolid from "../../assets/categories/eye-solid.svg";
import styles from "./BtnHide.module.scss";
const BtnHide = ({ isType, showBtn }) => {
  return (
    <>
      <button type="button" className={styles.btnEye}>
        <img
          src={isType ? hideIcon : eyeSolid}
          alt="hide text"
          onClick={showBtn}
        />
      </button>
    </>
  );
};

export default BtnHide;
