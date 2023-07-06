import React, {useState} from 'react';
import style from '../../style/water.module.scss'
const InputRange = () => {
    const [weight, setWeight] = useState(0)
    const [active, setActive] = useState(0)
    const [ total, setTotal ] = useState(0)

    const handleChange = (e) => {
        setWeight(e.target.value)
        setTotal(Math.floor(weight * 0.03))
    }

    const handleChangeActive = (e) => {
        setActive(e.target.value)
        setTotal(Math.floor(active + weight) / 2)
    }

    return (
        <>
            <div className={style.weight_block}>
                <p>Ваш вес</p>
                <input type='range' min='20' max='150' step='1' value={weight} onChange={handleChange}/>
                <span>{weight} кг</span>
                <div className={style.weight_range}>
                    <p>20</p>
                    <p>80</p>
                    <p>150</p>
                </div>
            </div>
            <div className={style.activity_block}>
                <p>Физическая активность</p>
                <input type='range' min='0' max='6' step='0.5' value={active} onChange={handleChangeActive}/>
                <span>{active} ч</span>
                <div className={style.activity_range}>
                    <p>0</p>
                    <p>3</p>
                    <p>6</p>
                </div>

            </div>
            <div className={style.total_block}>
                <p>Ваша рекомендуемая норма</p>
                <div className={style.total_inner}>
                    <h3>{total}</h3>
                    <p>литра воды в день</p>
                </div>

            </div>
            </>

    );
};

export default InputRange;