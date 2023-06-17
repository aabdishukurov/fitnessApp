import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import BtnHide from "../BtnHide";
import { useNavigate } from "react-router-dom";
import logoFit from "../../assets/image/logo_fitbreak.jpg";
import Yoga from "../../assets/image/yoga.jpg";
import arrow from "../../assets/image/arrow-right.svg";
import Input from "../Input";
import BtnAuth from "../BtnAuth";
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isType, setIsType] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
    isAuthenticated && navigate("/premium");
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
    <div className="form-login">
      <div className="form__wrapper-logos">
        <img className="form__logo" src={logoFit} alt="FitBreak" />
        <img className="form__yoga" src={Yoga} alt="yoga" />
      </div>

      <div className="form-login__wrapper">
        <h2 className="form__title form-login__title">Добро пожаловать!</h2>
        <h3 className="form__subtitle form-login__subtitle">
          FitBreak - ваш источник сил и энергии!
        </h3>
        <form onSubmit={handleSubmit}>
          <label className="form__label">
            Логин*
            <Input
              className="form__input"
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
          <label className="form__label">
            Пароль*
            <Input
              className="form__input"
              type={isType ? "password" : "text"}
              // pattern={pattern}
              title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              value={password}
              handleChange={handlePasswordChange}
              brColor={!isValidPassword && "2px solid red"}
              placeholder={"Введите пароль "}
            />
            {!isValidPassword && <span>неверный пароль</span>}
            <b onClick={handleReset} className="form-login__reset">
              сбросить пароль <img src={arrow} alt="arrow right" />
            </b>
            <BtnHide showBtn={showBtn} isType={isType} />
          </label>

          <div className="form__wrapper-btns">
            <BtnAuth
              className="form__btn-enter"
              value={"Зарегистрироваться"}
              to={"/register"}
            />
            <BtnAuth className="form__btn-register" value={"Войти"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
