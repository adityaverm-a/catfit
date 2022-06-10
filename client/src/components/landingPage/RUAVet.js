import React from 'react'

import Header from './Header'
import Hero from './Hero'

import RuaVet from '../../images/ruaVet.svg'
import Footer from './Footer'

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
