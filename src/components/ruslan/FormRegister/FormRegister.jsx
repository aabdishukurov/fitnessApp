import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import hideIcon from "../../../assets/image/hide-icon.svg";
import eyeSolid from "../../../assets/image/hide-icon.svg";

import BtnNext from "../BtnNext/BtnNext";
import BtnClose from "../BtnClose";
const FormRegister = ({ handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [name, setName] = useState("");

  const [isType, setIsType] = useState(true);

  const showBtn = () => {
    setIsType(!isType);
  };

  return (
    <div className="form-register">
      <h2 className="form-register__title">Регистрация</h2>
      <BtnClose />
      <input
        className="form-register__input"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        className="form-register__input"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Имя"
      />

      <div className="form-register__wrapper">
        <input
          type={isType ? "password" : "text"}
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          placeholder="Придумайте пароль"
          className="form-register__input"
        />
        <img src={hideIcon} alt="hide text" onClick={showBtn} />
      </div>
      <div className="form-register__wrapper">
        <input
          type={isType ? "password" : "text"}
          value={repass}
          onChange={(e) => {
            setRepass(e.target.value);
          }}
          className="form-register__input"
          placeholder="Повторите пароль"
        />
        <img src={hideIcon} alt="hide text" onClick={showBtn} />
      </div>

      <BtnNext title="Далее" />

      {/* <p>
        у вас уже есть аккаунт? <Link to="/login">Войти</Link>
      </p> */}
    </div>
  );
};

export default FormRegister;
