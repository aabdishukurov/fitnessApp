import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import BtnHide from "../BtnHide";
import Input from "../Input";
import BtnAuth from "../BtnAuth";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

import iconWarn from "../../assets/register/warn-icon.png";
import logoFit from "../../assets/register/logo_fitbreak.jpg";
import Yoga from "../../assets/register/yoga.jpg";
// import arrow from "../../assets/register/arrow-right.svg";
import styles from "./FormLogin.module.scss";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isType, setIsType] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const { isAuthenticated, user, error } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));

    if (isAuthenticated) {
      navigate("/");
    }
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };
  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
  };
  const showBtn = () => {
    setIsType(!isType);
  };

  return (
    <div className={styles.formLogin}>
      <div className={styles.formLogin__wrapperLogos}>
        <img className={styles.formLogin__logo} src={logoFit} alt="FitBreak" />
        <img className={styles.formLogin__yoga} src={Yoga} alt="yoga" />
      </div>

      <div className={styles.formLogin__wrapper}>
        <h2 className={styles.formLogin__title}>Добро пожаловать!</h2>
        <h3 className={styles.formLogin__subtitle}>
          FitBreak - ваш источник сил и энергии!
        </h3>
        {error && (
          <span>
            <img src={iconWarn} alt="warn" />
            неверный логин или пароль
          </span>
        )}
        <form onSubmit={handleSubmit}>
          <label className={styles.formLogin__label}>
            Логин
            <Input
              className={styles.formLogin__input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Введите e-mail"}
              isValid={isValidEmail}
              handleChange={handleEmailChange}
            />
          </label>
          <label className={styles.formLogin__label}>
            Пароль
            <Input
              className={styles.formLogin__input}
              type={isType ? "password" : "text"}
              title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              value={password}
              handleChange={handlePasswordChange}
              placeholder={"Введите пароль"}
              autocomplete="current-password"
            />
            <BtnHide showBtn={showBtn} isType={isType} />
          </label>
          <div className={styles.formLogin__wrapperBtns}>
            <BtnAuth value={"Зарегистрироваться"} to={"/register"} />
            <BtnAuth value={"Войти"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
