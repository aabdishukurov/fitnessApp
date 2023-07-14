import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import logo from "../assets/logo.png";
import arrow from "../assets/navbar/arrow.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avatar from "../assets/navbar/ava.png";
import premium from "../assets/navbar/premium.svg";
import { useSelector } from "react-redux";

const links = [
  { id: "1", link: "/", title: "Главная" },
  { id: "2", link: "/", title: "О FitBreak" },
  { id: "3", link: "/main", title: "Упражнения" },
  { id: "4", link: "/main", title: "FitBreak" },
];

const NavBar = () => {
  const { proStatus } = useSelector((state) => state.ProReducer);

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const usrname = Cookies.get("userName");
    const usrToken = Cookies.get("user_token");
    if (usrToken) {
      setIsLogin(true);
      setUserName(usrname);
    }

    console.log(usrname);
  }, []);

  let profile = proStatus ? (
    <>
      <Link className="nav-profile" to={"/profile"}>
        <img className="avatar" src={avatar} alt="avatar" />
        <img className="badge" src={premium} alt="premium_badge" />
        <span>Привет, {userName}!</span>
      </Link>
    </>
  ) : isLogin ? (
    <>
      <Link className="nav-profile" to={"/profile"}>
        <img src={avatar} alt="avatar" />
        <span>Привет, {userName}!</span>
      </Link>
    </>
  ) : (
    <>
      <Link className="btn_signin" to={"/login"}>
        Войти
      </Link>
      <Link className="btn_signup" to={"register"}>
        Присоединиться
      </Link>
    </>
  );

  return (
    <header>
      <div className="nav__top">
        <div className="nav__top__meditation">
          Прослушайте медитацию и наполните ваше тело новым зарядом!{" "}
        </div>
        <div className="nav__top__helpers">
          <a href="/faq">FAQ</a>
          <div className="nav__top__helpers__lang">
            <span>RU</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="nav__bottom">
          <div className="nav__bottom__l">
            <img
              src={logo}
              alt="logo"
              className="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="nav__bottom__r">
            <div>
              <ul>
                {links.map((item) => (
                  <li key={item.id}>
                    <NavLink href={item.link}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__bottom__r__btns">{profile}</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
