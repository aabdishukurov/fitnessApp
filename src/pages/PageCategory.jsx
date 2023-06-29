import React from 'react';
import styles from '../components/categories/categories.module.scss';
import { Category, Title } from '../components';
import { Button } from '../UI';
// images
import Man from '../assets/categories/man.png';
import Back from '../assets/categories/back.png';
import Hand from '../assets/categories/hand.png';
import Leg from '../assets/categories/leg.png';
import Eye from '../assets/categories/eye.png';
import BlueLine from '../assets/categories/blue-line.png';
import SmallBlueLine from '../assets/categories/small-blue-line.png';
import Timer from '../assets/categories/timer.png';

const warmUps = [
  {
    id: 1,
    image: Eye,
    alt: 'Eye',
    className: styles.categories__without_flex_direction,
    classNameForBlueLine: styles.categories__blue_line_left,
    LineImg: BlueLine,
    name: 'Разминка для глаз',
    time: '3-5 минут',
    pros: 'Снимает усталость',
    pros2: 'Восстанавливает кровообращение в глазах',
    pros3: 'Укрепляет глазные мышцы',
  },
  {
    id: 2,
    image: Leg,
    alt: 'Leg',
    className: styles.categories__with_flex_direction,
    classNameForBlueLine: styles.categories__blue_line_right,
    LineImg: BlueLine,
    name: 'Разминка для ног и ступней',
    time: '5-8 минут',
    pros: 'Улучшает метаболизм',
    pros2: 'Обеспечивает приток кислорода',
    pros3: 'Улучшает кровообращение',
  },
  {
    id: 3,
    image: Hand,
    alt: 'Hand',
    className: styles.categories__without_flex_direction,
    classNameForBlueLine: styles.categories__blue_line_left,
    LineImg: BlueLine,
    name: 'Разминка для кистей рук',
    time: '3-5 минут',
    pros: 'Повышает подвижность суставов',
    pros2: 'Восстанавливает кровообращение',
    pros3: 'Облегчает болевые ощущения',
  },
  {
    id: 4,
    image: Back,
    alt: 'Back',
    className: styles.categories__with_flex_direction,
    classNameForBlueLine: styles.categories__blue_line_right,
    LineImg: BlueLine,
    name: 'Разминка для спины',
    time: '3-5 минут',
    pros: 'Обеспечивает правильную циркуляцию крови',
    pros2: 'Профилактика искривления позвоночника',
    pros3: 'Повышает тонус мышц',
  },
  {
    id: 5,
    image: Man,
    alt: 'Man',
    className: styles.categories__without_flex_direction,
    classNameForBlueLine: styles.categories__blue_line_center,
    LineImg: SmallBlueLine,
    name: 'Разминка для шеи и плеч',
    time: '5 минут',
    pros: 'Расслабляет мышцы спины, плеч и шеи',
    pros2: 'Снимает нагрузку',
    pros3: 'Регулирует кровеносное давление',
  },
];

export const PageCategory = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title title={'Упражнения и разминки'} />
      {warmUps.map((warmup) => (
        <>
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
          <div className={warmup.classNameForBlueLine}>
            <img src={warmup.LineImg} alt="blue-line" />
          </div>
        </>
      ))}
      <Button
        title={'Просмотреть свою статистику'}
        className={styles.button_style}
      />
    </div>
  );
};
