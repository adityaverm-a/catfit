import React, { useState } from 'react'
import Sticky from 'react-stickynode'
import Header from './landingPage/Header';
import Hero from './landingPage/Hero';

const Landing = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status) => {
        if(status === Sticky.STATUS_FIXED){
            setIsSticky(true)
        } else if(status === Sticky.STATUS_ORIGINAL){
            setIsSticky(false)
        }
    }

    return (
        <>
            <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
                <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
            </Sticky> 
            <main className='landingMain'>
                <div className='container'>
                    <Hero />
                </div>
            </main>
        </>
    )
}

export default Landing
