import React from 'react'
import CategoriesDemo from '../components/Landing/CategoriesDemo'
import Hero from '../components/Landing/Hero'
import About from '../components/Landing/About'
import Goals from '../components/Landing/Goals'
import Devider from '../components/Landing/Devider'
import { ProDescription } from '../components/Landing/ProDescription'

const LandingPage = () => {

    const isLogin = false
    const isPremium = false

    let content = isLogin
        ? (
            <>
                <Hero />
                <Devider />
                <Goals />
                <Devider />
                <h1>Calculator</h1>
                <CategoriesDemo />
                <Devider />
                <ProDescription />
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
                    <h1>Calculator</h1>
                    <CategoriesDemo />
                    <Devider />
                    <ProDescription />
                </>
            )

    return (
        content
    )
}

export default LandingPage