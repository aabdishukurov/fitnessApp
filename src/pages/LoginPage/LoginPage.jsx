import React from "react";
import FormLogin from "../../components/FormLogin";
import lineTop from "../../assets/image/line-top.png";
import lineBot from "../../assets/image/line-bottom.png";

import styles from "./LoginPage.module.scss";
const LoginPage = () => {
  return (
    <div className="login-page">
      <img className="login-page__img" src={lineTop} alt="line" />
      <FormLogin />

      <img className="login-page__img" src={lineBot} alt="line" />
    </div>
  );
};

export default LoginPage;
