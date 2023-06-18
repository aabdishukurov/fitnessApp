import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import PlayStoreButton from './ildar/categories/button/PlayStoreButton'
import AppStoreButton from './ildar/categories/button/AppStoreButton'

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
                    <PlayStoreButton />
                    <AppStoreButton />
                </div>
            </div>
        </footer>
    )
}

export default Footer