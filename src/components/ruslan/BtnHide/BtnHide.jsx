import React from "react";
import hideIcon from "../../../assets/image/hide-icon.svg";
import eyeSolid from "../../../assets/image/eye-solid.svg";
const BtnHide = ({ isType, showBtn }) => {
  return (
    <>
      <button type="button" className="form__btn-eye">
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
