import React from "react";
import checkImg from "../../assets/image/checkmark.svg";
import BtnNext from "../../components/ruslan/BtnNext/BtnNext";
import BtnClose from "../../components/ruslan/BtnClose/BtnClose";
const SuccessPage = () => {
  return (
    <>
      <div className="success">
        <div className="success__btn">
          <BtnClose />
        </div>
        <h2 className="success__title">Регистрация успешно завершена</h2>
        <img src={checkImg} alt="Check" />
        <BtnNext title="OK" to="/login" />
      </div>
    </>
  );
};

export default SuccessPage;
