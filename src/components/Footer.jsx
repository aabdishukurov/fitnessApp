import React from 'react'
import logo from '../assets/logo.png'
import logo_app_store from '../assets/footer/app_store.png'
import logo_play_store from '../assets/footer/play_store.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    const links = [
        { link: "/", title: "Главная" },
        { link: "/main", title: "О FitBreak" },
        { link: "/main", title: "Упражнения" },
        { link: "/main", title: "FitBreak" },
    ]

    const help = [
        { link: "/", title: "Часто задаваемые вопросы" },
        { link: "/main", title: "Поддержка" },
        { link: "/main", title: "Политика конфиденциальности" },
        { link: "/main", title: "Условия использования" },
    ]

    const personalization = [
        { link: "/", title: "Тарифы" },
        { link: "/main", title: "Настройка пользователя" },
        { link: "/main", title: "Уведомления" },
        { link: "/main", title: "Хотите стать частью команды?" },
    ]

    const apps = [
        { logo: logo_play_store, title: "Play Store", link: "/", alt: "play_store" },
        { logo: logo_app_store, title: "App Store", link: "/", alt: "app_store" },
    ]

    return (
        <footer>
            <div className='footer__top'>
                <img src={logo} alt="logo" />
            </div>
            <div className='footer__bottom'>
                <div className='footer__bottom__links'>
                    <ul>
                        {links.map((item, index) => (
                            <li key={index}><NavLink to={item.link}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div className='footer__bottom__help'>
                    <h2>Помощь</h2>
                    <ul>
                        {help.map((item, index) => (
                            <li key={index}><NavLink to={item.link}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div className='footer__bottom__personalization'>
                    <h2>Персонализация</h2>
                    <ul>
                        {personalization.map((item, index) => (
                            <li key={index}><NavLink to={item.link}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div className='footer__bottom__application'>
                    {apps.map((item, index) => (
                        <div key={index} className='footer__bottom__application__store'>
                            <img src={item.logo} alt={item.alt} />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer