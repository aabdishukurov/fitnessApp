import React from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../store/slices/authSlice";
import googleIcon from "../../assets/register/google-icon.svg";
import styles from "./GoogleAuthButton.module.scss";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleAuthButton() {
  const dispatch = useDispatch();

  const handleGoogleResponse = useGoogleLogin({
    onSuccess: (res) => {
      const { access_token } = res;
      console.log(res);
      dispatch(googleLogin(access_token));
    },
  });

  return (
    <>
      <button
        className={styles.btnAuth}
        type="button"
        onClick={handleGoogleResponse}
      >
        <img src={googleIcon} alt="google icon" />
        Войти через Google
      </button>
    </>
  );
}

export default GoogleAuthButton;
