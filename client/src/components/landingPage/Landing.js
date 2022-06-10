import React, { useState } from 'react'
import Sticky from 'react-stickynode'
import { Redirect } from 'react-router-dom'

import Assurance from './Assurance'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing/Pricing'
import Services from './Services'
import Testimonials from './Testimonials';
import WhatWeDo from './WhatWeDo';

import CatCare from '../../images/cat-care.png'

import { useSelector } from 'react-redux'
import Newsletter from './Newsletter'

const Landing = () => {

    const { isAuthenticated } = useSelector(({ auth }) => ({ isAuthenticated: auth.isAuthenticated }))

    const [isSticky, setIsSticky] = useState(false)

    const handleStateChange = (status) => {
        if(status.status === Sticky.STATUS_FIXED){
            setIsSticky(true)
        } else if(status.status === Sticky.STATUS_ORIGINAL){
            setIsSticky(false)
        }
    }

    return (
        <>
            {isAuthenticated ? 
                (
                    <Redirect to='/dashboard' />
                ) : (
                    <>
                        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
                            <Header 
                                isLandingPage='true'
                                className={`${isSticky ? 'sticky' : 'unSticky'}`}  
                            />
                        </Sticky> 
                        <main className='landingMain'>
                        
                            <Hero
                                imgSrc={CatCare}
                                isLandingPage='true'
                                text='Let us take care of your Cat'
                            />
                            <WhatWeDo />
                            <HowItWorks />
                            <Assurance />
                            <Services />
                            <Pricing />
                            <Testimonials />
                            <Newsletter />
                        </main>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Landing
