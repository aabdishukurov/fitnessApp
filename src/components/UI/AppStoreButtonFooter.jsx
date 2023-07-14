import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/footer/app_store.svg'

const AppStoreButton = () => {
    return (
        <Link
            to='/https://www.apple.com/app-store/'
            className='storeButtonFooter'
        >
            <button>
                <div>
                    <img src={Logo} alt="app_store_logo" />
                    <span>App Store</span>
                </div>
            </button>
        </Link>
    )
}

export default AppStoreButton