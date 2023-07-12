import React from "react";
import FormLogin from "../../components/FormLogin";
import Loader from "../../components/Loader";
import { useAuth } from "../../hooks/use-auth";
import styles from "./LoginPage.module.scss";
const LoginPage = () => {
  const { isAuth } = useAuth();
  return (
    <div className={styles.loginPage}>
      {!isAuth ? <FormLogin /> : <Loader />}
    </div>
  );
};

export default LoginPage;
