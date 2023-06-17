import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import logoFit from "../../assets/image/logo_fitbreak.jpg";
import Yoga from "../../assets/image/yoga.jpg";
import styles from "./FormRegister.module.scss";

import BtnHide from "../BtnHide";
import Input from "../Input";
import BtnAuth from "../BtnAuth";
import GoogleAuthButton from "../GoogleAuthButton";
const FormRegister = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [errors, setErrors] = useState({});

  const [type, setType] = useState(true);

  const [isType, setIsType] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  const pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  const showBtn = () => {
    setIsType(!isType);
  };

  const showText = () => {
    setType(!type);
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    setIsValidPassword(validatePassword(inputValue));
  };

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    setIsValidName(validateName(inputValue));
  };

  const handleSecondNameChange = (event) => {
    const inputValue = event.target.value;
    setSecondName(inputValue);
    setIsValidName(validateName(inputValue));
  };

  const handleConfirmPasswordChange = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
    setIsValidConfirmPassword(inputValue === password);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      isValidName
    ) {
      const userData = {
        email,
        name: userName,
        // secondName,
        password,
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
      };
      console.log("userData", userData);
      dispatch(registerUser(JSON.stringify(userData)));

      if (isAuthenticated) {
        navigate("/login");
      }
    }
  };

  const validateEmail = (input) => {
    // Регулярное выражение для проверки валидности адреса электронной почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    // Валидация пароля: должен содержать минимум 8 символов
    // и хотя бы одну букву верхнего регистра и одну цифру
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(input);
  };

  const validateName = (input) => {
    // Валидация имени: должно содержать только буквы и пробелы
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(input);
  };

  return (
    <div className="form">
      <div className="form__wrapper-logos">
        <img className="form__logo" src={logoFit} alt="FitBreak" />
        <img className="form__yoga" src={Yoga} alt="yoga" />
      </div>

      <div className="form__wrapper">
        <h2 className="form__title">Добро пожаловать!</h2>
        <h3 className="form__subtitle">Зарегистрируйтесь с помощью e-mail</h3>
        <form onSubmit={handleSubmit}>
          <label className="form__label">
            Номер телефона или e-mail*
            <Input
              className="form__input"
              type="email"
              value={email}
              title={""}
              isValid={isValidEmail}
              handleChange={handleEmailChange}
              brColor={!isValidEmail && "2px solid red"}
              placeholder={"Введите номер или e-mail"}
            />
            {!isValidEmail && (
              <span>Адрес электронной почты должен содержать символ @</span>
            )}
          </label>

          <label className="form__label">
            Создайте пароль*
            <Input
              className="form__input"
              type={isType ? "password" : "text"}
              pattern={pattern}
              // title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              value={password}
              handleChange={handlePasswordChange}
              brColor={!isValidPassword && "2px solid red"}
              placeholder={"от 8 символов, включая  !@#?$ "}
            />
            {!isValidPassword && (
              <span>
                Должно содержать по крайней мере одно число, одну заглавную и
                строчную буквы, а также не менее 8 и более символов
              </span>
            )}
            <BtnHide isType={isType} showBtn={showBtn} />
          </label>
          <label className="form__label">
            Подтвердите пароль*
            <Input
              className="form__input"
              type={type ? "password" : "text"}
              value={confirmPassword}
              handleChange={handleConfirmPasswordChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              brColor={!isValidConfirmPassword && "2px solid red"}
              placeholder={"Повторите пароль"}
            />
            {!isValidConfirmPassword && <span>Пароли не совпадают</span>}
            <BtnHide isType={type} showBtn={showText} />
          </label>

          <div className="form__inner">
            <label className="form__label">
              Имя*
              <Input
                className="form__input-names"
                type="text"
                value={userName}
                handleChange={handleNameChange}
                isValid={isValidName}
                // brColor={!isValidName && "2px solid red"}
                placeholder="Введите имя"
              />
            </label>
            <label className="form__label">
              Фамилия*
              <Input
                className="form__input-names"
                type="text"
                value={secondName}
                handleChange={handleSecondNameChange}
                isValid={isValidName}
                // brColor={!isValidName && "2px solid red"}
                placeholder="Введите Фамилию"
              />
            </label>
          </div>

          <div className="form__wrapper-auth">
            <p className="form__subtitle">
              <span className="form__line"></span> Войти через
              <span className="form__line"></span>
            </p>
            <GoogleAuthButton />
          </div>

          <div className="form__wrapper-btns">
            <BtnAuth
              className="form__btn-register"
              value={"Зарегистрироваться"}
            />
            <BtnAuth
              className="form__btn-enter"
              value={"Войти"}
              to={"/login"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
