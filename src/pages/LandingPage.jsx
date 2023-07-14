import React from 'react'
import Hero from '../components/Landing/Hero'
import Devider from '../components/Landing/Devider'

const LandingPage = () => {

    const isLogin = false
    const isPremium = false

    let content = isLogin
        ? (
            <>
                <Hero />
                <Devider />
            </>
        )
        : isPremium
            ? (
                <div>Premium</div>
            )
            : (
                <>
                    <Hero />
                    <Devider />
                </>
            )

    return (
        content
    )
}

export default LandingPage