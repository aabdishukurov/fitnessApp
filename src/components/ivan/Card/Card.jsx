export const Card = ({ info }) => {
  return (
    <li className="pro__card card">
      <div className="card__title">
        <b>FitBreak</b> {info.title}
      </div>
      <ul className="card__list">
        {info.props.map((prop) => (
          <li className="card__item" key={prop}>
            {prop}
          </li>
        ))}
      </ul>
      <button className="card__button">
        <span className="card__clipped-text">Купить: {info.price}</span>
      </button>
    </li>
  );
};
