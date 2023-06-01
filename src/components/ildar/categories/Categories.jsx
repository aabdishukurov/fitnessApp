import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css';
import { useSelector, useDispatch } from 'react-redux';
import {
  isAuthVTrue,
  isProVTrue,
} from '../../../store/slices/ildar/categories-slice';

import ForEyePng from '../../../assets/categories/for-eye.png';
import ForHandPng from '../../../assets/categories/for-hand.png';
import ForNeckPng from '../../../assets/categories/for-neck.png';
import ForBackPng from '../../../assets/categories/for-back.png';
import ForMeditationPng from '../../../assets/categories/for-meditation.png';

const allCategories = [
  {
    id: 1,
    image: ForEyePng,
    title: 'Для глаз',
    alt: 'Женщина за ноутбуком потирает глаза рукой и держит очки',
  },
  {
    id: 2,
    image: ForHandPng,
    title: 'Для рук',
    alt: 'Одна рука держит мышку, другая держит первую, на заднем плане ноутбук',
  },
  {
    id: 3,
    image: ForNeckPng,
    title: 'Для шеи',
    alt: 'Мужчина, сидя за компьютером, держится за шею',
  },
  {
    id: 4,
    image: ForBackPng,
    title: 'Для спины',
    alt: 'Женщина за ноутбуком, выгибаясь держится за спину',
  },
  {
    id: 5,
    image: ForMeditationPng,
    title: 'Для спины',
    alt: 'Ноги на подушке для ног',
  },
];

export const Categories = () => {
  const { isAuthV, isProV } = useSelector(({ categories }) => categories);
  const dispatch = useDispatch();
  const onAuthTrue = () => {
    dispatch(isAuthVTrue());
  };
  const onProVTrue = () => {
    dispatch(isProVTrue());
  };
  return (
    <div className="categories">
      <h2>Категории</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        className="categories__items"
        spaceBetween={0}
        slidesPerView={2.5}
      >
        {isProV
          ? allCategories.slice(0, 5).map((categorie) => (
              <SwiperSlide
                style={{ cursor: 'grab' }}
                className="categories__items__item"
              >
                <img src={categorie.image} alt={categorie.title} />
                <p>{categorie.title}</p>
              </SwiperSlide>
            ))
          : !isAuthV
          ? allCategories.slice(0, 2).map((categorie) => (
              <SwiperSlide className="categories__items__item">
                <img src={categorie.image} alt={categorie.alt} />
                <p>{categorie.title}</p>
              </SwiperSlide>
            ))
          : allCategories.slice(0, 4).map((categorie) => (
              <SwiperSlide
                style={{ cursor: 'grab' }}
                className="categories__items__item"
              >
                <img src={categorie.image} alt={categorie.title} />
                <p>{categorie.title}</p>
              </SwiperSlide>
            ))}
      </Swiper>
      <button onClick={onAuthTrue}>Войти</button>
      <button onClick={onProVTrue}>Активировать Pro Версию</button>
    </div>
  );
};
