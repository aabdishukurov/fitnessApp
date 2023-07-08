import { Link } from "react-router-dom";
import style from "./ProCard.module.scss";

export const ProCard = ({ info, className }) => {
  return (
    <li className={`${className} ${style.card} `}>
      <div className={style.card__title}>
        <b>FitBreak</b> {info.name}
      </div>
      <ul className={style.card__list}>
        {info.goods.map((good, i) => (
          <li className={style.card__item} key={i}>
            {good}
          </li>
        ))}
      </ul>
      <Link className={style.card__button} to={"/buyPro"}>
        Купить: {info.price}
      </Link>
    </li>
  );
};
