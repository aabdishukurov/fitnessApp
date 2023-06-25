import React from 'react'
import CategoriesDemo from '../components/Landing/CategoriesDemo'
import Hero from '../components/Landing/Hero'
import About from '../components/Landing/About'
import Goals from '../components/Landing/Goals'
import Devider from '../components/Landing/Devider'

const LandingPage = () => {

    const isLogin = true
    const isPremium = false

    let content = isLogin
        ? (
            <>
                <Hero />
                <Devider />
                <Goals />
                <Devider />
                <CategoriesDemo />
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
                    <About />
                    <Devider />
                    <CategoriesDemo />
                </>
            )

    return (
        content
    )
}

export default LandingPage