import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logoFit from "../../assets/register/logo_fitbreak.jpg";
import Yoga from "../../assets/register/yoga.jpg";
import styles from "./FormRegister.module.scss";

import BtnHide from "../BtnHide";
import Input from "../Input";
import BtnAuth from "../BtnAuth";
import GoogleAuthButton from "../GoogleAuthButton";
import { registerUser } from "../../store/slices/authUser";

import Loader from "../Loader";
const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setName] = useState("");
  const [secondName, setSecondName] = useState("");

  const [type, setType] = useState(true);
  const [isType, setIsType] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const { isLoading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pattern = "(?=.*[a-z])(?=.*[A-Z]).{8,}";
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

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      isValidName
    ) {
      dispatch(registerUser({ email, password }));
      resetForm();
    }
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(input);
  };

  const validateName = (input) => {
    const nameRegex = /^[a-zA-Z\s].{3,}$/;
    return nameRegex.test(input);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <div className={styles.form}>
            <div className={styles.form__wrapperLogos}>
              <img className={styles.form__logo} src={logoFit} alt="FitBreak" />
              <img className={styles.form__yoga} src={Yoga} alt="yoga" />
            </div>
            <div className={styles.form__wrapper}>
              <h2 className={styles.form__title}>Добро пожаловать!</h2>
              <h3 className={styles.form__subtitle}>
                Зарегистрируйтесь с помощью e-mail
              </h3>
              <form onSubmit={handleSubmit}>
                <label className={styles.form__label}>
                  E-mail
                  <Input
                    className={styles.form__input}
                    type="email"
                    value={email}
                    title={""}
                    isValid={isValidEmail}
                    handleChange={handleEmailChange}
                    brColor={!isValidEmail && "2px solid red"}
                    placeholder={"Введите e-mail"}
                  />
                  {!isValidEmail && (
                    <span>
                      Адрес электронной почты должен содержать символ @
                    </span>
                  )}
                  {error === "Firebase: Error (auth/email-already-in-use)." &&
                    !email && (
                      <span>Пользователь с таким email уже существует</span>
                    )}
                </label>

                <label className={styles.form__label}>
                  Создайте пароль
                  <Input
                    className={styles.form__input}
                    type={isType ? "password" : "text"}
                    pattern={pattern}
                    value={password}
                    handleChange={handlePasswordChange}
                    brColor={!isValidPassword && "2px solid red"}
                    placeholder={"от 8 символов, включая  !@#?$ "}
                  />
                  {!isValidPassword && (
                    <span>
                      Должно содержать по крайней мере одно число, одну
                      заглавную и строчную буквы, а также не менее 8
                    </span>
                  )}
                  <BtnHide isType={isType} showBtn={showBtn} />
                </label>
                <label className={styles.form__label}>
                  Подтвердите пароль
                  <Input
                    className={styles.form__input}
                    type={type ? "password" : "text"}
                    value={confirmPassword}
                    handleChange={handleConfirmPasswordChange}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    brColor={!isValidConfirmPassword && "2px solid red"}
                    placeholder={"Повторите пароль"}
                  />
                  {!isValidConfirmPassword && <span>Пароли не совпадают</span>}
                  <BtnHide isType={type} showBtn={showText} />
                </label>

                <div className={styles.form__inner}>
                  <label className={styles.form__label}>
                    Имя
                    <Input
                      className={styles.form__inputNames}
                      type="text"
                      value={userName}
                      handleChange={handleNameChange}
                      isValid={isValidName}
                      placeholder="Введите имя"
                    />
                    {!isValidName && (
                      <span>
                        Фамилия и Имя должны содержать не менее 4 букв
                      </span>
                    )}
                  </label>
                  <label className={styles.form__label}>
                    Фамилия
                    <Input
                      className={styles.form__inputNames}
                      type="text"
                      value={secondName}
                      handleChange={handleSecondNameChange}
                      isValid={isValidName}
                      placeholder="Введите Фамилию"
                    />
                  </label>
                </div>

                <div className={styles.form__wrapperAuth}>
                  <p className={styles.form__subtitle}>
                    <span className={styles.form__line}></span> Войти через
                    <span className={styles.form__line}></span>
                  </p>
                  <GoogleAuthButton />
                </div>

                <div className={styles.form__wrapperBtns}>
                  <BtnAuth value={"Зарегистрироваться"} />
                  <BtnAuth value={"Войти"} to={"/login"} />
                </div>
              </form>
            </div>
          </div>{" "}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FormRegister;
