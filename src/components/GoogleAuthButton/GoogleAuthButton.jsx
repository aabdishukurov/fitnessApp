import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/authUser";
import googleIcon from "../../assets/register/google-icon.svg";
import styles from "./GoogleAuthButton.module.scss";
import { signInWithGoogle } from "../../firebase";
import { useGoogleLogin } from "@react-oauth/google";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import Cookies from "js-cookie";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
function GoogleAuthButton() {
  // const { email } = useSelector((state) => state.auth);
  const { isAuth } = useAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            userName: user.displayName,
          }),
          Cookies.set(user.accessToken)
        );
        if (user) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
