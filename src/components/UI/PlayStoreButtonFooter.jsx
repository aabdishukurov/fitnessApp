import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/footer/play_store.png'

const PlayStoreButton = () => {
    return (
        <Link
            to='https://play.google.com/store/games'
            className='storeButtonFooter'
        >
            <button>
                <div>
                    <img src={Logo} alt="play_store_logo" />
                    <span>Play Store</span>
                </div>
            </button >
        </Link>
    )
}

export default PlayStoreButton