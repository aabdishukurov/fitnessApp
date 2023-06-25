import React from 'react';
import { Button } from '../ildar/categories/button/Button';
import Eye from '../../assets/categories/eye.png'
import Leg from '../../assets/categories/leg.png'
import Timer from '../../assets/categories/timer.png';
import { Link } from 'react-router-dom';

const warmUps = [
    {
        image: Leg,
        alt: 'Leg',
        className: 'categories__with-flex-direction',
        name: 'Разминка для ног и ступней',
        time: '5-8 минут',
        pros: 'Улучшает метаболизм',
        pros2: 'Обеспечивает приток кислорода',
        pros3: 'Улучшает кровообращение',
    },
    {
        image: Eye,
        alt: 'Eye',
        className: 'categories__without-flex-direction',
        name: 'Разминка для глаз',
        time: '3-5 минут',
        pros: 'Снимает усталость',
        pros2: 'Восстанавливает кровообращение в глазах',
        pros3: 'Укрепляет глазные мышцы',
    },
];

export const CategoriesDemo = () => {
    return (
        <div className="categories">
            {warmUps.map((warmup, index) => (
                <div className={warmup.className} key={index}>
                    <div className="categories__image-side">
                        <img src={warmup.image} alt={warmup.alt} />
                    </div>
                    <div className="categories__text-side">
                        <div className="text-side__name">
                            <h3>{warmup.name}</h3>
                            <img src={Timer} alt="timer" />
                            <p>{warmup.time}</p>
                        </div>
                        <div className="categories__pros-side">
                            <div>
                                <div>
                                    <span></span>
                                </div>
                                <p>{warmup.pros}</p>
                            </div>
                            <div>
                                <div>
                                    <span></span>
                                </div>
                                <p>{warmup.pros2}</p>
                            </div>
                            <div>
                                <div></div>
                                <p>{warmup.pros3}</p>
                            </div>
                        </div>
                        <Link>
                            <Button />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoriesDemo
