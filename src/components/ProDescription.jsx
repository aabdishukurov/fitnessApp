import React from 'react'
import BlueDivider from '../assets/main_page_divider/blue_divider.png'
import PurpleDivider from '../assets/main_page_divider/purple_divider.png'
import ProLogo from '../assets/pro_description/logoPro.png'

export const ProDescription = () => {
  return (
    <div className='pro-decription-card'>
        <img src = {BlueDivider}
             alt=""
             className='main-page-divider'/>
        <img src = {PurpleDivider}
             alt=""
             className='main-page-divider'/>

        <div className='pro-decription-pg-title'>
            <h4>FitBreak</h4>
            <img src = {ProLogo}
                alt=""
                className='main-page-divider'/>
        </div>

        <div className='pro-description-body'>
            <p>
                <span className='text-1st-word'>FitBreak </span>
                <span className='text-2st-word'>PRO </span>
                - это отличный инструмент, который позволит Вам персонализировать Ваши 
                данные, отслеживать статистику проделанных упражнений, за которые Высможете получать
                Ранги уровней Вашей активности.
            </p>
            <p>
                Также, Вы можете активировать дополнительные опции, такие как медитация, дыхательные 
                гимнастики, слежение за уровнем гидрализации Вашего тела,  выбор дополнительных целей
                (сбросить вес, набрать мышечную массу) и настройка личных уведомлений. 
            </p>
            <p>
                В полном комплексе Вы станете на десять шагов ближе к Вашей цели!
            </p>
        </div>

        <div className = 'subscription-cards'>

            <div className = 'subscription-card type-light'>
                <div className='subscription-card-title'>
                    <span className='title-FitBreak'>FitBreak </span>
                    <span className='title-type'>Light</span>
                </div>

                <ul className='benefits-list'>
                    <li>Медитации</li>
                    <li>Дыхательные гимнастики</li>
                    <li>ранги и уровни</li>
                    <li>Персональная статистика</li>
                    <li className = 'no-access'>Гидрализация</li>
                    <li className = 'no-access'>Отслеживание шагов к цели</li>
                    <li className = 'no-access'>Нутриоциология</li>
                </ul>

                <button>
                    купить: $0.00/мес.
                </button>
            </div>

            <div className = 'subscription-card type-medium'>
                <div className='subscription-card-title'>
                    <span className='title-FitBreak'>FitBreak </span>
                    <span className='title-type'>Medium</span>
                </div>

                <ul className='benefits-list'>
                    <li>Медитации</li>
                    <li>Дыхательные гимнастики</li>
                    <li>ранги и уровни</li>
                    <li>Персональная статистика</li>
                    <li>Гидрализация</li>
                    <li className = 'no-access'>Отслеживание шагов к цели</li>
                    <li className = 'no-access'>Нутриоциология</li>
                </ul>

                <button>
                    купить: $2.00/мес.
                </button>
            </div>

            <div className = 'subscription-card type-hight'>
                <div className='subscription-card-title'>
                    <span className='title-FitBreak'>FitBreak </span>
                    <span className='title-type'>Hight</span>
                </div>

                <ul className='benefits-list'>
                    <li>Медитации</li>
                    <li>Дыхательные гимнастики</li>
                    <li>ранги и уровни</li>
                    <li>Персональная статистика</li>
                    <li>Гидрализация</li>
                    <li>Отслеживание шагов к цели</li>
                    <li>Нутриоциология</li>
                </ul>

                <button>
                    купить: $4.00/мес.
                </button>
            </div>
        </div>
    </div>
  )
}
