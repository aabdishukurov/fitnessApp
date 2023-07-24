import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import googleIcon from "../../assets/register/google-icon.svg";
import styles from "./GoogleAuthButton.module.scss";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../store/slices/authUser";

function GoogleAuthButton() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const signInWithGoogle = () => {
    dispatch(googleLogin());
  };

  return (
    <>
      <button
        className={styles.btnAuth}
        type="button"
        onClick={signInWithGoogle}
      >
        <img src={googleIcon} alt="google icon" />
        Войти через Google
      </button>
    </>
  );
}

export default GoogleAuthButton;
