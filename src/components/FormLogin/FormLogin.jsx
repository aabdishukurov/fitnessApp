import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import BtnHide from "../BtnHide";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import logoFit from "../../assets/categories/logo_fitbreak.jpg";
import Yoga from "../../assets/categories/yoga.jpg";
import arrow from "../../assets/categories/arrow-right.svg";
import styles from "./FormLogin.module.scss";
// import { useAuth } from "../../hooks/use-auth";
import Input from "../Input";
import BtnAuth from "../BtnAuth";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isType, setIsType] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const { isAuthenticated, isLoading } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
    navigate("/premium");
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
  const handleReset = () => {
    setPassword("");
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
        <form onSubmit={handleSubmit}>
          <label className={styles.formLogin__label}>
            Логин*
            <Input
              className={styles.formLogin__input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Введите e-mail"}
              isValid={isValidEmail}
              handleChange={handleEmailChange}
              brColor={!isValidEmail && "2px solid red"}
            />
            {!isValidPassword && <span>неверный логин</span>}
          </label>
          <label className={styles.formLogin__label}>
            Пароль*
            <Input
              className={styles.formLogin__input}
              type={isType ? "password" : "text"}
              // pattern={pattern}
              title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              value={password}
              handleChange={handlePasswordChange}
              brColor={!isValidPassword && "2px solid red"}
              placeholder={"Введите пароль "}
            />
            {!isValidPassword && <span>неверный пароль</span>}
            <b onClick={handleReset} className={styles.formLogin__reset}>
              сбросить пароль <img src={arrow} alt="arrow right" />
            </b>
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
