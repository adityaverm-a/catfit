import React, { useState } from 'react'
import Sticky from 'react-stickynode'

import Assurance from './landingPage/Assurance';
import Footer from './landingPage/Footer';
import Header from './landingPage/Header';
import Hero from './landingPage/Hero';
import HowItWorks from './landingPage/HowItWorks';
import Pricing from './landingPage/Pricing/Pricing';
import Services from './landingPage/Services';
import WhatWeDo from './landingPage/WhatWeDo';

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
                <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
            </Sticky> 
            <main className='landingMain'>
            
                <Hero />
                <WhatWeDo />
                <HowItWorks />
                <Assurance />
                <Services />
                <Pricing />
            </main>
            <Footer />
        </>
    )
}

export default Landing
