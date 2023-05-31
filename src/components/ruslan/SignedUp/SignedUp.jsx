import React from "react";
import checkMark from "../../../assets/image/checkmark.svg";
import BtnClose from "../BtnClose";
import BtnNext from "../BtnNext/BtnNext";
const SignedUp = () => {
  return (
    <>
      <div className="signed">
        <h2>Регистрация успешно завершина</h2>
        <img src={checkMark} alt="check-icon" />
        <BtnNext title="OK" />
      </div>
    </>
  );
};

export default SignedUp;
