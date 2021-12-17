import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ text, imgSrc, isLandingPage }) => {
    return (
        <div className='container landingHero'>
            <div className='landingHero__cta'>
                <h1>{text}</h1>
                <Link to={isLandingPage ? '/signup' : '/vet-signup'}>
                    <button className='primaryBtn'>
                        Sign Up Now
                    </button>
                </Link>
            </div>
            <div className='landingHero__graphic'>
                <img 
                    src={imgSrc} 
                    className='heroImage'
                    alt={text} 
                />
            </div>
        </div>
    )
}

export default Hero
