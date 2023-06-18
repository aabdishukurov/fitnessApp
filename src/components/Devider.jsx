import React from 'react'
import BlueDevider from '../assets/main_page_devider/blue_devider.png'
import PurpleDevider from '../assets/main_page_devider/purple_devider.png'

const Devider = () => {
    return (
        <div className='color__deviders'>
            <img src={BlueDevider} alt="blue_devider" className='blue_devider' />
            <img src={PurpleDevider} alt="purple_devider" />
        </div>
    )
}

export default Devider