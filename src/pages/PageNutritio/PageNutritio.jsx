import style from "./PageNutritio.module.scss";

import star from "../../assets/star.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentNutritio } from "../../store/nutritios/NutririosSlice";

export const PageNutritio = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { currentNutritio } = useSelector((state) => state.NutririosReducer);

  useEffect(() => {
    if (currentNutritio?.id !== params.id) {
      dispatch(setCurrentNutritio(params.id));
    }
  }, [params.id]);

  const renderStars = (count) => {
    const Stars = [];
    for (let i = 0; i < count; i++) {
      Stars.push(
        <li key={i}>
          <img src={star} alt="" className={style.star} />
        </li>
      );
    }
    return Stars;
  };

  return (
    <main>
      <div className={style.container}>
        <div className={style.content}>
          <img
            src={currentNutritio.image}
            alt=""
            className={style.image}
            width="300"
            height="300"
          />
          <div className={style.info}>
            <p className={style.name}>{currentNutritio.name}</p>
            <p className={style.age}>{currentNutritio.age}</p>
            <p className={style.expirience}>
              Стаж: <span>{currentNutritio.expirience}</span>
            </p>
            <p className={style.raiting}>Отзывы</p>
            <ul className={style.stars}>
              {renderStars(currentNutritio.raiting)}
            </ul>
          </div>
          <a className={style.contacts}>
            <p className={style.title}>Контакты</p>
            <a
              href={`tel:${currentNutritio.contacts?.telephone}`}
              target="_blank"
              className={style.tel}
            >
              <i className={`${style.tel__icon} ${style.icon}`}></i>
              {currentNutritio.contacts?.telephone}
            </a>
            <a
              href={`https://wa.me/${currentNutritio.contacts?.whattsapp}`}
              target="_blank"
              className={style.whatsapp}
            >
              <i className={`${style.whatsapp__icon} ${style.icon}`}></i>
              {currentNutritio.contacts?.whattsapp}
            </a>
            <a
              href={`https://www.instagram.com/${currentNutritio.contacts?.instagram}`}
              target="_blank"
              className={style.inst}
            >
              <i className={`${style.inst__icon} ${style.icon}`}></i>
              {currentNutritio.contacts?.instagram}
            </a>
          </a>
        </div>
      </div>
    </main>
  );
};
