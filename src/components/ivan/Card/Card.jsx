import style from './card.module.scss'

export const Card = ({ info, className }) => {
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
      <button className={style.card__button}>
        <span className={style.card__clipped_text}>Купить: {info.price}</span>
      </button>
    </li>
  );
};
