import React from 'react';
import './../../../styles/components/_water.scss'
import ButtonGender from "./Buttons/ButtonGender";
import water from './../../../assets/water/water.jpg'
import InputRange from "./InputsRange/InputRange";
const WaterCalculator = () => {
    return (
        <div className='waterComponent'>
           <h2>Рассчитайте норму воды</h2>
            <h3>калькулятор дневного потребления воды</h3>
            <div className="aboutCalc">
                <p>Норма воды - это то количество воды, которое желательно выпивать помимо чая, кофе, соков и других напитков. Расчитайте свою норму, с помощью нашего <strong>калькулятора.</strong> </p>
            </div>
            <div className='waterAbout'>
                <div>
                    <img src={water} alt=""/>
                </div>
                <div className='waterRight'>
                    <ButtonGender/>
                    <InputRange/>
                </div>


            </div>
            <div className='water_info'>
                <p>Данный расчет носит рекомендательный характер. Для того, чтобы получить более точную информацию <br/>необходимо обратиться к диетологу.
                    <br/>
                    <br/>
                    Для расчета используются рекомендации различных стран и ВОЗ, учитываются дополнительные параметры.</p>
            </div>
        </div>
    );
};

export default WaterCalculator;