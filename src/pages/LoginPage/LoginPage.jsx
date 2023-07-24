import React from "react";
import FormLogin from "../../components/FormLogin";
import styles from "./LoginPage.module.scss";
const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <FormLogin />
    </div>
  );
};

export default LoginPage;
