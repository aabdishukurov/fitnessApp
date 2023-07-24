import { useSelector } from "react-redux";
import { NutritioCard } from "../index";
import style from "./NutritiosSection.module.scss";

export const NutritiosSection = () => {
  const { nutritiosArray } = useSelector((state) => state.NutririosReducer);

  return (
    <section className={style.nutrios}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>
            <h2>Скорректируйте питание</h2>
          </div>
          <ul className={style.nutritos_list}>
            {nutritiosArray.map((info) => (
              <NutritioCard info={info} key={info.id} />
            ))}
          </ul>
          <button className={style.button}>Смотреть весь список</button>
        </div>
      </div>
    </section>
  );
};
