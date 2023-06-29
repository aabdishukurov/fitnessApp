import React, {useState} from 'react';
import '../../../../styles/components/_water.scss'
const ButtonGender = () => {

    const [active, setActive] = useState(true)



    return (
        <div className='btns'>

            <button
                style={{background: active ? "linear-gradient(90deg, #0164E7 2.94%, #019CF4 105.65%)" : "white", color: active ? "white" : "black"}}
                onClick={() => setActive(true)}
                className='man'
                >Мужской</button>
            <button
                style={{background: !active ? "linear-gradient(90deg, #0164E7 2.94%, #019CF4 105.65%)" : "white" , color: !active ? "white" : "black"}}
                onClick={() => setActive(false)}
                className='woman'
                >Женский</button>
        </div>
    );
};

export default ButtonGender;