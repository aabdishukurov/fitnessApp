import React from 'react'
import YogaImage from '../assets/landing/landing_about.png'

const About = () => {
    return (
        <div className='about'>
            <div>
                <h2>
                    О FitBreak
                </h2>
            </div>
            <div>
                <section className='about__yoga'>
                    <img src={YogaImage} alt="yoga" />
                </section>
                <section className='about__text'>
                    <p><span>
                        FitBreak
                    </span>
                        - приложение и онлайн трекер с персонализацией, которые помогут Вам быстро и легко избавится от проблем в условиях офиса. Исходя из ваших целей, Вам будет предложен личный порядок разминок и упражнений, которые увеличат Вашу продуктивность и бодрость в течение всего рабочего времени.</p>
                </section>
            </div>
        </div>
    )
}

export default About