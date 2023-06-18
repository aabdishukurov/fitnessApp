import React from 'react'
import Goal1 from '../assets/landing/goal1.svg'
import Goal2 from '../assets/landing/goal2.svg'
import Goal3 from '../assets/landing/goal3.svg'
import Goal4 from '../assets/landing/goal4.svg'

const goals = [
    { img: Goal1, alt: "goal1", title: "Устранение усталости", desc: "Персональная настройка порядка разминок, которые будут оповещать вас через уведомления" },
    { img: Goal2, alt: "goal2", title: "Бодрость и продуктивность", desc: "Персональная настройка порядка разминок, которые будут оповещать вас через уведомления" },
    { img: Goal3, alt: "goal3", title: "Улучшение фокусировки", desc: "Персональная настройка порядка разминок, которые будут оповещать вас через уведомления" },
    { img: Goal4, alt: "goal4", title: "Разминка и зарядка", desc: "Персональная настройка порядка разминок, которые будут оповещать вас через уведомления" },
]

const Goals = () => {

    return (
        <div className='goals'>
            <div className='goals__choose'>
                <h2>Выберите Цель</h2>
            </div>
            <section className='goals__list'>
                {goals.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.alt} />
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Goals