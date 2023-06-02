import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/slices/ruslan/authSlice";
import { gapi } from "gapi-script";
import BtnNext from "../BtnNext";
import BtnHide from "../BtnHide";
import BtnClose from "../BtnClose";
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton/GoogleAuthButton";
import { useEffect } from "react";
import { CLIENT_ID } from "../../../config";
import GoogleLogOut from "../GoogleLogOut/GoogleLogOut";
const FormRegister = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [userName, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [isType, setIsType] = useState(true);
  const [type, setType] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoading = useSelector((state) => state.auth);
  // const error = useSelector((state) => state.auth.error);

  const showBtn = () => {
    setIsType(!isType);
  };

  const showText = () => {
    setType(!type);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Валидация электронной почты
    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    }

    // Валидация пароля
    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userData = {
        email,
        password,
      };

      dispatch(registerUser(userData));
      !errors.email && !errors.password && navigate("/login");
    }
  };

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: CLIENT_ID,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client-auth2", start);
  // }, []);

  // const accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="form">
      <h2 className="form__title">Регистрация</h2>
      <BtnClose />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form__input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={errors.email ? "Не правильный email" : "Email"}
            required
          />
        </div>
        <input
          className="form__input"
          type="text"
          value={userName}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Имя"
          required
        />

        <div className="form__wrapper">
          <input
            type={isType ? "password" : "text"}
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Придумайте пароль"
            className="form__input"
          />
          <BtnHide isType={isType} showBtn={showBtn} />
        </div>
        <div className="form__wrapper">
          <input
            type={isType ? "password" : "text"}
            value={repass}
            onChange={(e) => {
              setRepass(e.target.value);
            }}
            className="form__input"
            placeholder="Повторите пароль"
            required
          />
          <BtnHide isType={type} showBtn={showText} />
        </div>
        <GoogleAuthButton />
        <GoogleLogOut />
        <button className="form__btn-next" type="submit">
          Далее
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
