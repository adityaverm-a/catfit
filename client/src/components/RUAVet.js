import React from 'react'

import Header from './landingPage/Header'
import Hero from './landingPage/Hero'

import RuaVet from '../images/ruaVet.svg'
import Footer from './landingPage/Footer'

const RUAVet = () => {
    return (
        <>
            <Header className='sticky' />
            <div className='vets-container'>
                <Hero 
                    imgSrc={RuaVet}
                    text='Join Our Team'
                />
            </div>
            <Footer />
        </>
    )
}

export default RUAVet
