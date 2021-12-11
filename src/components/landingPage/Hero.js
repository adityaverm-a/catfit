import React from 'react'
import { Link } from 'react-router-dom'
import CatCare from '../../images/cat-care.png'

const Hero = () => {
    return (
        <div className='landingHero'>
            <div className='heroCta'>
                <h1>Let us take care of your Cat</h1>
                <Link to='/signup'>
                    <button className='signUpBtn'>
                        Sign Up Now
                    </button>
                </Link>
            </div>
            <div className='heroGraphic'>
                <img 
                    src={CatCare} 
                    className='heroImage'
                    alt="Taking care of your Cat" 
                />
            </div>
        </div>
    )
}

export default Hero
