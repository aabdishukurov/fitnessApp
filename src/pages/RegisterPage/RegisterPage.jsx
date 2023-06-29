import FormRegister from "../../components/FormRegister";
import React from "react";
import styles from "./RegisterPage.module.scss";
import Loader from "../../components/Loader";
import { useAuth } from "../../hooks/use-auth";
const RegisterPage = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <div className={styles.registerPage}>
        {!isLoading ? <FormRegister /> : <Loader />}
      </div>
    </>
  );
};

export default RegisterPage;
