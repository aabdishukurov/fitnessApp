import style from "./NutritioCard.module.scss";

import star from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { BlueButton } from "../../UI/BlueButton/BlueButton";

export const NutritioCard = ({ info }) => {
  const renderStars = (count) => {
    const Stars = [];
    for (let i = 0; i < count; i++) {
      Stars.push(<img src={star} alt="" className={style.star} key={i} />);
    }
    return Stars;
  };

  return (
    <li className={style.nutritio}>
      <img src={info.image} alt={info.name} className={style.image} />
      <div className={style.content}>
        <div className={style.info}>
          <p className={style.name}>{info.name}</p>
          <p className={style.age}>{info.age}</p>
        </div>
        <ul className={style.details}>
          <li className={style.detail}>
            <b>Стаж:</b> <span>{info.expirience}</span>
          </li>
          <li className={style.detail}>
            <b>Образование:</b> <span>{info.education}</span>
          </li>
          <li className={style.detail}>
            <b>Профессия / направление:</b> <span>{info.proffesion}</span>
          </li>
        </ul>
        <div className={style.raiting}>
          Рейтинг
          <ul className={style.stars}>{renderStars(info.raiting)}</ul>
        </div>
        <Link to={`/nutritio/${info.id}`}>
          <BlueButton className={style.button}>Связаться</BlueButton>
        </Link>
      </div>
    </li>
  );
};
