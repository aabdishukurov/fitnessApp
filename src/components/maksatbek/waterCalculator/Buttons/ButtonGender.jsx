import React, {useState} from 'react';
import style from '../../style/water.module.scss'
const ButtonGender = () => {

    const [active, setActive] = useState(true)



    return (
        <div className={style.btns}>

            <button
                style={{background: active ? "linear-gradient(90deg, #0164E7 2.94%, #019CF4 105.65%)" : "white", color: active ? "white" : "black"}}
                onClick={() => setActive(true)}
                className={style.man}
                >Мужской</button>
            <button
                style={{background: !active ? "linear-gradient(90deg, #0164E7 2.94%, #019CF4 105.65%)" : "white" , color: !active ? "white" : "black"}}
                onClick={() => setActive(false)}
                className={style.woman}
                >Женский</button>
        </div>
    );
};

export default ButtonGender;