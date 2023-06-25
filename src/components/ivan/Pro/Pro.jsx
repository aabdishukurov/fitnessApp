import style from './pro.module.scss';
import { ProCard } from '../../';

const cards = [
  {
    id: 1,
    title: 'Bronze',
    props: [
      'Медитации',
      'Дыхательные гимнастики',
      'Ранги и уровни',
      'Персональная статистика',
    ],
    price: '$0.00/мес.',
  },
  {
    id: 2,
    title: 'Silver',
    props: [
      'Медитации',
      'Дыхательные гимнастики',
      'Ранги и уровни',
      'Персональная статистика',
      'Гидрализация',
    ],
    price: '$0.99/мес.',
  },
  {
    id: 3,
    title: 'Gold',
    props: [
      'Медитации',
      'Дыхательные гимнастики',
      'Ранги и уровни',
      'Персональная статистика',
      'Гидрализация',
      'Отслеживание шагов к цели',
      'Нутрициология',
    ],
    price: '$1.99/мес.',
  },
];

export const Pro = () => {
  return (
    <section className={style.pro}>
      <div className={style.container}>
        <div className={style.pro__content}>
          <div className={`${style.pro__logo} ${style.logo}`}>
            <span className={style.logo__name}>FitBreak</span>
            <div className={style.logo__pro}>
              <i className={style.logo__icon} />
              PRO
            </div>
          </div>
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
            {cards.map((card) => (
              <ProCard info={card} key={card.id} className={style.pro__card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
