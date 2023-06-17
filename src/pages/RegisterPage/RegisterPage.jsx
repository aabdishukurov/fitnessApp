import FormRegister from "../../components/FormRegister";
import React from "react";
import lineTop from "../../assets/image/line-top.png";
import lineBot from "../../assets/image/line-bottom.png";
import styles from "./RegisterPage.module.scss";
const RegisterPage = () => {
  return (
    <>
      <div className="register-page">
        <img className="register-page__img" src={lineTop} alt="line" />
        <FormRegister />
        <img className="register-page__img" src={lineBot} alt="line" />
      </div>
    </>
  );
};

export default RegisterPage;
