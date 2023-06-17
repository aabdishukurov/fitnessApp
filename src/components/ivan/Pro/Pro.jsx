import { Card } from "../Card/Card";

const cards = [
  {
    id: 1,
    title: "Bronze",
    props: [
      "Медитации",
      "Дыхательные гимнастики",
      "Ранги и уровни",
      "Персональная статистика",
    ],
    price: "$0.00/мес.",
  },
  {
    id: 2,

    title: "Silver",
    props: [
      "Медитации",
      "Дыхательные гимнастики",
      "Ранги и уровни",
      "Персональная статистика",
      "Гидрализация",
    ],
    price: "$2.00/мес.",
  },
  {
    id: 3,
    title: "Gold",
    props: [
      "Медитации",
      "Дыхательные гимнастики",
      "Ранги и уровни",
      "Персональная статистика",
      "Гидрализация",
      "Отслеживание шагов к цели",
      "Нутрициология",
    ],
    price: "$4.00/мес.",
  },
];

export const Pro = () => {
  return (
    <section className="pro">
      <div className="container">
        <div className="pro__content">
          <div className="pro__logo logo">
            <span className="logo__name">FitBreak</span>
            <div className="logo__pro">
              <i className="logo__icon" />
              PRO
            </div>
          </div>
          <div className="pro__text">
            <p className="pro__paragraph">
              <span className="pro__accent">
                FitBreak <span>PRO</span>
              </span>
              - это отличный инструмент, который позволит Вам персонализировать
              Ваши данные, отслеживать статистику проделанных упражнений, за
              которые Высможете получать Ранги уровней Вашей активности.
            </p>
            <p className="pro__paragraph">
              Активируйте дополнительные опции и настройте уведомления
              персонализированно!
            </p>
            <p className="pro__paragraph">
              В полном комплексе Вы станете на десять шагов ближе к Вашей цели!
            </p>
          </div>
          <ul className="pro__cards">
            {cards.map((card) => (
              <Card info={card} key={card.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
