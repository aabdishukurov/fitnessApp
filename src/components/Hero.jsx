import React from 'react'
import { Button } from './ildar/categories/button/Button'
import PlayButton from './ildar/categories/button/PlayButton'
import AppStoreButton from './ildar/categories/button/AppStoreButton'
import PlayStoreButton from './ildar/categories/button/PlayStoreButton'

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <section className='hero__l'>
                    <h2>Поднимитесь и <span>зарядитесь</span> энергией!</h2>
                    <p>Быстрый и эффективный Express-фитнес в офисе и за рабочим столом</p>
                    <Button />
                </section>
                <section className='hero__r'>
                    <div className='hero__r__play'>
                        <div className='hero__r__play__top'>
                            <PlayButton />
                        </div>
                        <div className='hero__r__play__bottom'>
                            <AppStoreButton />
                            <PlayStoreButton />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Hero