import style from "./ProLogo.module.scss";

export const ProLogo = ({ className }) => {
  return (
    <div className={`${style.logo} ${className}`}>
      <div className={`${style.pro__logo} ${style.logo}`}>
        <span className={style.logo__name}>FitBreak</span>
        <div className={style.logo__pro}>
          <i className={style.logo__icon} />
          PRO
        </div>
      </div>
    </div>
  );
};
