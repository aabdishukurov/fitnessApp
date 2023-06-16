import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector, useDispatch } from 'react-redux';
import {
  isAuthVTrue,
  isProVTrue,
} from '../../store/slices/ildar/categories-slice';

import ForEyePng from '../../../assets/for-eye.png';
import ForHandPng from '../../../assets/for-hand.png';
import ForNeckPng from '../../../assets/for-neck.png';
import ForBackPng from '../../../assets/for-back.png';
import ForMeditationPng from '../../../assets/for-meditation.png';

const allCategories = [
  { id: 1, image: ForEyePng, title: 'Для глаз' },
  { id: 2, image: ForHandPng, title: 'Для рук' },
  { id: 3, image: ForNeckPng, title: 'Для шеи' },
  { id: 4, image: ForBackPng, title: 'Для спины' },
  { id: 5, image: ForMeditationPng, title: 'Для медитации' },
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
        className="categories__items"
        spaceBetween={100}
        slidesPerView={2.5}
      >
        {isProV
          ? allCategories.slice(0, 5).map((categorie) => (
              <SwiperSlide className="categories__items__item">
                <img src={categorie.image} alt={categorie.title} />
                <p>{categorie.title}</p>
              </SwiperSlide>
            ))
          : !isAuthV
          ? allCategories.slice(0, 2).map((categorie) => (
              <SwiperSlide className="categories__items__item">
                <img src={categorie.image} alt={categorie.title} />
                <p>{categorie.title}</p>
              </SwiperSlide>
            ))
          : allCategories.slice(0, 4).map((categorie) => (
              <SwiperSlide className="categories__items__item">
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
