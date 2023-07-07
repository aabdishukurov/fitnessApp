import React from 'react';
import style from '../style/water.module.scss'
import ButtonGender from "./Buttons/ButtonGender";
import water from './../../../assets/water/water.jpg'
import InputRange from "./InputsRange/InputRange";
const WaterCalculator = () => {
    return (
        <div className={style.waterComponent}>
            <div className={style.title}>
                <h2>Рассчитайте норму воды</h2>
            </div>
          
            <div className={style.waterAbout}>
                <div>
                    <img src={water} alt=""/>
                </div>
                <div className={style.waterRight}>
                    <ButtonGender/>
                    <InputRange/>
                </div>
            </div>
           <div className={style.settings}>
            <button className={style.settingsBtn}>настроить уведомления</button>
           </div>
        </div>
    );
};

export default WaterCalculator;