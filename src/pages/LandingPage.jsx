import React from 'react'
import Categories from '../components/ildar/categories/Categories'
import Hero from '../components/Hero'
import About from '../components/About'
import Goals from '../components/Goals'
import Devider from '../components/Devider'

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Devider />
            <About />
            <Devider />
            <Goals />
            <Devider />
            <Categories />
        </div>
    )
}

export default LandingPage