import React from 'react';
import { Button } from './button/Button';
// images
import Man from '../../../assets/categories/man.png';
import Back from '../../../assets/categories/back.png';
import Hand from '../../../assets/categories/hand.png';
import Leg from '../../../assets/categories/leg.png';
import Eye from '../../../assets/categories/eye.png';
import Timer from '../../../assets/categories/timer.png';
import { Link } from 'react-router-dom';

const warmUps = [
  {
    id: 1,
    image: Man,
    alt: 'Man',
    className: 'categories__without-flex-direction',
    name: 'Разминка для шеи и плеч',
    time: '5 минут',
    pros: 'Расслабляет мышцы спины, плеч и шеи',
    pros2: 'Снимает нагрузку',
    pros3: 'Регулирует кровеносное давление',
  },
  {
    id: 2,
    image: Back,
    alt: 'Back',
    className: 'categories__with-flex-direction',
    name: 'Разминка для спины',
    time: '3-5 минут',
    pros: 'Обеспечивает правильную циркуляцию крови',
    pros2: 'Профилактика искривления позвоночника',
    pros3: 'Повышает тонус мышц',
  },
  {
    id: 3,
    image: Hand,
    alt: 'Hand',
    className: 'categories__without-flex-direction',
    name: 'Разминка для кистей рук',
    time: '3-5 минут',
    pros: 'Повышает подвижность суставов',
    pros2: 'Восстанавливает кровообращение',
    pros3: 'Облегчает болевые ощущения',
  },
  {
    id: 4,
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
    id: 5,
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

export const Categories = () => {
  return (
    <div className="categories">
      {warmUps.map((warmup) => (
        <div className={warmup.className} key={warmup.id}>
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
