import React, { useState } from 'react'
import Sticky from 'react-stickynode'
import { Link } from 'react-router-dom';

import Assurance from './landingPage/Assurance';
import Footer from './landingPage/Footer';
import Header from './landingPage/Header';
import Hero from './landingPage/Hero';
import HowItWorks from './landingPage/HowItWorks';
import Pricing from './landingPage/Pricing/Pricing';
import Services from './landingPage/Services';
import Testimonials from './landingPage/Testimonials';
import WhatWeDo from './landingPage/WhatWeDo';

import CatCare from '../images/cat-care.png'

const Landing = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status) => {
        if(status.status === Sticky.STATUS_FIXED){
            setIsSticky(true)
        } else if(status.status === Sticky.STATUS_ORIGINAL){
            setIsSticky(false)
        }
    }

    return (
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
                <div className='tbd'>
                    <h3>Make your Cat Healthy and Fit</h3>
                    <Link to='/signup'>
                        <button className='secondaryBtn'>Sign Up Now</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Landing
