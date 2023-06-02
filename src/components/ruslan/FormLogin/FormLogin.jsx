import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/slices/ruslan/authSlice";
import BtnHide from "../BtnHide/BtnHide";
import BtnClose from "../BtnClose/BtnClose";

function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const [isType, setIsType] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };
  const showBtn = () => {
    setIsType(!isType);
  };
  return (
    <div className="form">
      <h2 className="form__title">Авторизоваться</h2>
      <BtnClose />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={error ? <p>{error}</p> : "Email"}
            required
          />
        </div>
        <div className="form__wrapper">
          <input
            className="form__input"
            type={isType ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            required
          />
          <BtnHide showBtn={showBtn} isType={isType} />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button className="form__btn-next" type="submit">
            Войти
          </button>
        )}
        {/* {error && <p>{error}</p>} */}
      </form>
    </div>
  );
}

export default LoginForm;
