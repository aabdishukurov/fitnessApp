import React from 'react';
import styles from '../components/categories/categories.module.scss';
import { Category } from '../components';
// images
import Man from '../assets/categories/man.png';
import Back from '../assets/categories/back.png';
import Hand from '../assets/categories/hand.png';
import Leg from '../assets/categories/leg.png';
import Eye from '../assets/categories/eye.png';
import Timer from '../assets/categories/timer.png';

const warmUps = [
  {
    id: 1,
    image: Man,
    alt: 'Man',
    className: styles.categories__without_flex_direction,
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
    className: styles.categories__with_flex_direction,
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
    className: styles.categories__without_flex_direction,
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
    className: styles.categories__with_flex_direction,
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
    className: styles.categories__without_flex_direction,
    name: 'Разминка для глаз',
    time: '3-5 минут',
    pros: 'Снимает усталость',
    pros2: 'Восстанавливает кровообращение в глазах',
    pros3: 'Укрепляет глазные мышцы',
  },
];

export const PageCategory = () => {
  return (
    <>
      {warmUps.map((warmup) => (
        <Category
          key={warmup.id}
          className={warmup.className}
          categoryImage={warmup.image}
          timerImage={Timer}
          alt={warmup.alt}
          name={warmup.name}
          pros={warmup.pros}
          pros2={warmup.pros2}
          pros3={warmup.pros3}
          time={warmup.time}
        />
      ))}
    </>
  );
};
