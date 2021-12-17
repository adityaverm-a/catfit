import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import LogoSrc from '../../images/catfitLogo.svg'
import MobileDrawer from './MobileDrawer'

const Header = ({ className, isLandingPage }) => {
    const MenuItems = [
        {
            id: 1,
            label: isLandingPage ? 'Are you a Veterinarian?' : 'Home',
            path: isLandingPage ? '/vet' : '/',
        },
        {
            id: 2,
            label: 'Login',
            path: isLandingPage ? '/login' : '/vet-login',
        }
    ]

    return (
        <header id='landingHeader' className={cn(className, 'landingNav')}>
            <div className='navContainer'>
                <Link to='/'>
                    <img src={LogoSrc} alt="cat.fit logo" />
                </Link>
                <nav>
                    {MenuItems.map(({id, label, path}) => (
                        <Link
                            key={id}
                            to={path}
                            className='navLink'
                        >
                            {label}
                        </Link>
                    ))}
                    <Link to={isLandingPage ? '/signup' : '/vet-signup'}>
                        <button className={cn(className === 'sticky' ?'secondaryBtn' : 'primaryBtn', 'navSignUpBtn')}>
                            Sign Up
                        </button>
                    </Link>
                    <MobileDrawer isLandingPage={isLandingPage} />
                </nav>
            </div>
        </header>
    )
}

export default Header
