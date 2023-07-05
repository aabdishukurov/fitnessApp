import React from 'react'
import logo from '../assets/logo.png'
import arrow from '../assets/navbar/arrow.png'
import { NavLink, useNavigate } from 'react-router-dom'
import avatar from '../assets/navbar/ava.png'
import premium from '../assets/navbar/premium.svg'

const links = [
    { link: "/", title: "Главная" },
    { link: "/main", title: "О FitBreak" },
    { link: "/main", title: "Упражнения" },
    { link: "/main", title: "FitBreak" },
]


const NavBar = () => {
    const navigate = useNavigate()

    const isLogin = false
    const isPremium = false

    const name = "Aboba"

    let profile = (
        isPremium
            ? (
                <>
                    <img className='avatar' src={avatar} alt="avatar" />
                    <img className='badge' src={premium} alt="premium_badge" />
                    <span>Привет, {name}!</span>
                </>
            ) : isLogin
                ? (
                    <>
                        <img src={avatar} alt="avatar" />
                        <span>Привет, {name}!</span>
                    </>
                ) : (
                    <>
                        <button className='btn_signin' onClick={() => navigate('/login')}>Войти</button>
                        <button className='btn_signup' onClick={() => navigate('/signup')}>Присоединиться</button>
                    </>
                )
    )

    return (
        <header>
            <div className='nav__top'>
                <div className='nav__top__meditation'>Прослушайте медитацию и наполните ваше тело новым зарядом! </div>
                <div className='nav__top__helpers'>
                    <a href="/faq">FAQ</a>
                    <div className='nav__top__helpers__lang'>
                        <span>RU</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <nav className='nav__bottom'>
                <div className='nav__bottom__l'>
                    <img
                        src={logo}
                        alt="logo"
                        className='logo'
                        onClick={() => { navigate('/') }}
                    />
                </div>
                <div className='nav__bottom__r'>
                    <div>
                        <ul>
                            {links.map((item, index) => (
                                <li key={index}><NavLink href={item.link}>{item.title}</NavLink></li>
                            ))}
                        </ul>
                    </div>
                    <div className='nav__bottom__r__btns'>
                        {
                            profile
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar