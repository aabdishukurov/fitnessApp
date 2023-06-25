import FormRegister from "../../components/FormRegister";
import React from "react";
import styles from "./RegisterPage.module.scss";
const RegisterPage = () => {
  return (
    <>
      <div className={styles.registerPage}>
        <FormRegister />
      </div>
    </>
  );
};

export default RegisterPage;
