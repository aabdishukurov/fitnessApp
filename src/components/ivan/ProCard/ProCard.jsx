import { useDispatch } from "react-redux";
import style from "./ProCard.module.scss";
import { getPro } from "../../../store/pro/proSlice";

export const ProCard = ({ info, className }) => {
  const dispatch = useDispatch();

  const buyPro = () => {
    dispatch(getPro());
  };

  return (
    <li className={`${className} ${style.card} `}>
      <div className={style.card__title}>
        <b>FitBreak</b> {info.title}
      </div>
      <ul className={style.card__list}>
        {info.props.map((prop) => (
          <li className={style.card__item} key={prop}>
            {prop}
          </li>
        ))}
      </ul>
      <button className={style.card__button} onClick={buyPro}>
        Купить: {info.price}
      </button>
    </li>
  );
};
