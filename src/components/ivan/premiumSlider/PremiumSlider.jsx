import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ForEyePng from '../../../assets/premiumPage/eyes.jpg';
import ForHandPng from '../../../assets/premiumPage/hands.jpg';
import ForNeckPng from '../../../assets/premiumPage/neck.jpg';
import ForBackPng from '../../../assets/premiumPage/back.jpg';
import ForLegskPng from '../../../assets/premiumPage/legs.jpg';

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
    image: ForLegskPng,
    title: 'Для медитации',
    alt: 'Женщина медитирует сидя на пляже',
  },
];

function PremiumSlider() {
  return (
    <>
      <Swiper
        className="slider__list slider"
        spaceBetween={80}
        slidesPerView={2.4}
      >
        {allCategories.slice(0, 5).map((categorie) => (
          <SwiperSlide className="slider__item">
            <img
              src={categorie.image}
              alt={categorie.alt}
              className="slider__image"
            />
            <p className="slider__text">{categorie.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PremiumSlider;
