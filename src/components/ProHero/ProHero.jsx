import { ProLogo } from "../../UI/ProLogo/ProLogo";
import style from "./ProHero.module.scss";

export const ProHero = () => {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <h1 className={style.welcome}>Добро пожаловать</h1>
        <ProLogo />
      </div>
    </section>
  );
};
