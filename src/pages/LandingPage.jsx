import React from 'react'
import Categories from '../components/ildar/categories/Categories'
import { ProDescription } from '../components/ProDescription'

const LandingPage = () => {
    return (
        <div>
            <h1>Landing</h1>
            <Categories />
            <ProDescription/>
        </div>
    )
}

export default LandingPage