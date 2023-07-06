import { NutritioCard } from "../index";
import style from "./NutritiosSection.module.scss";

import img1 from "../../assets/Nutritios1.jpg";
import img2 from "../../assets/Nutritios2.jpg";
import img3 from "../../assets/Nutritios3.jpg";

const nutritosArray = [
  {
    id: 1,
    name: "Олег Панков",
    age: "38 лет",
    image: img1,
    expirience: "8 лет",
    education: "Высшее медицинское",
    proffesion: "Диетолог",
    raiting: 5,
  },
  {
    id: 2,
    name: "Меруерт Каримова",
    age: "25 лет",
    image: img2,
    expirience: "2 года",
    education: "Сертификат “NUTRI NUR”",
    proffesion: "Нутрициолог",
    raiting: 3,
  },
  {
    id: 3,
    name: "Салтанат Орозова",
    age: "54 лет",
    image: img3,
    expirience: "22 года",
    education: "Высшее медицинское",
    proffesion: "Диетолог",
    raiting: 5,
  },
];

export const NutritiosSection = () => {
  return (
    <section className={style.nutrios}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>
            <h2>Скорректируйте питание</h2>
          </div>
          <ul className={style.nutritos_list}>
            {nutritosArray.map((info) => (
              <NutritioCard info={info} key={info.id} />
            ))}
          </ul>
          <button className={style.button}>Смотреть весь список</button>
        </div>
      </div>
    </section>
  );
};
