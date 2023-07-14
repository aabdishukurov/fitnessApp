import style from "./ProSection.module.scss";
import { ProCard } from "../index";
import { useSelector } from "react-redux";
import { ProLogo } from "../../UI/ProLogo/ProLogo";

export const ProSection = () => {
  const cardsInfo = [
    {
      name: "Bronze",
      goods: [
        "        Медитации",
        "Дыхательные гимнастики",
        "Ранги и уровни",
        "Персональная статистика",
      ],
      price: "$ 0.00/ мес.",
    },
    {
      name: "Gold",
      goods: [
        "        Медитации",
        "Дыхательные гимнастики",
        "Ранги и уровни",
        "Персональная статистика",
        "Гидрализация",
        "Отслеживание шагов к цели",
        "Нутрициология",
      ],
      price: "$ 1.99/ мес.",
    },
  ];

  return (
    <section className={style.pro}>
      <div className={style.container}>
        <div className={style.pro__content}>
          <ProLogo className={style.pro__logo} />
          <div className={style.pro__text}>
            <p className={style.pro__paragraph}>
              <span className={style.pro__accent}>
                FitBreak <span>PRO</span>
              </span>
              - это отличный инструмент, который позволит Вам персонализировать
              Ваши данные, отслеживать статистику проделанных упражнений, за
              которые Высможете получать Ранги уровней Вашей активности.
            </p>
            <p className={style.pro__paragraph}>
              Активируйте дополнительные опции и настройте уведомления
              персонализированно!
            </p>
            <p className={style.pro__paragraph}>
              В полном комплексе Вы станете на десять шагов ближе к Вашей цели!
            </p>
          </div>
          <ul className={style.pro__cards}>
            {cardsInfo.map((card) => (
              <ProCard info={card} key={card.id} className={style.pro__card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
