import React from "react";
import logo from "../assets/footer/logo.png";
import { NavLink } from "react-router-dom";
import PlayStoreButtonFooter from "../components/UI/PlayStoreButtonFooter";
import AppStoreButtonFooter from "../components/UI/AppStoreButtonFooter";

const Footer = () => {
  const links = [
    { id: "1", link: "/", title: "Главная" },
    { id: "2", link: "/main", title: "О FitBreak" },
    { id: "3", link: "/main", title: "Упражнения" },
    { id: "4", link: "/main", title: "FitBreak" },
  ];

  const help = [
    { id: "1", link: "/", title: "Часто задаваемые вопросы" },
    { id: "2", link: "/main", title: "Поддержка" },
    { id: "3", link: "/main", title: "Политика конфиденциальности" },
    { id: "4", link: "/main", title: "Условия использования" },
  ];

  const personalization = [
    { id: "1", link: "/", title: "Тарифы" },
    { id: "2", link: "/main", title: "Настройка пользователя" },
    { id: "3", link: "/main", title: "Уведомления" },
    { id: "4", link: "/main", title: "Хотите стать частью команды?" },
  ];

  return (
    <footer>
      <div className="footer__top">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__links">
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom__help">
          <h2>Помощь</h2>
          <ul>
            {help.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom__personalization">
          <h2>Персонализация</h2>
          <ul>
            {personalization.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__bottom__application">
          <PlayStoreButtonFooter />
          <AppStoreButtonFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
