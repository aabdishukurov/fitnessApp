import style from "./PageBuy.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPro } from "../../store/pro/proSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const PageBuy = () => {
  const { proStatus } = useSelector((state) => state.ProReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyPro = () => {
    dispatch(getPro());
    navigate("/pro");
  };

  return (
    <main>
      <div className={style.container}>
        <h2 className={`${style.pro__logo} ${style.logo}`}>
          Тариф
          <span className={style.logo__accent}> Silver</span>
        </h2>

        <form action="#">
          <div className={style.names}>
            <label>
              <div>Введите Фамилию</div>
              <input type="text" placeholder="Фамилия" name="secondName" />
            </label>
            <label>
              <div>Введите Имя</div>
              <input type="text" placeholder="Имя" name="firstName" />
            </label>
          </div>
          <div className={style.info}>
            <label>
              <div>Дата рождения</div>
              <input type="date" placeholder="дд.мм.гг" name="birthDay" />
            </label>
            <label>
              <div>Е-mail</div>
              <input type="e-mail" placeholder="e-mail" name="eMail" />
              <span className={style.description}>
                на почту будут отправлены документы о покупке
              </span>
            </label>
          </div>
        </form>

        <button onClick={buyPro} className={style.button}>
          Продолжить
        </button>
      </div>
    </main>
  );
};
