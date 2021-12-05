import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import LogoSrc from '../../images/catfitLogo.svg'
import MobileDrawer from './MobileDrawer'

const MenuItems = [
    {
        id: 1,
        label: 'Are you a Veterinarian?',
        path: '/vet',
    },
    {
        id: 2,
        label: 'Login',
        path: '/login',
    }
]

const Header = ({ className }) => {
    return (
        <header id='landingHeader' className={cn('landingNav', className)}>
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
                    <Link style={{ textDecoration: 'none' }} to='/signup'>
                        <button className={cn('signUpBtn', className)}>
                            Sign Up
                        </button>
                    </Link>
                    <MobileDrawer />
                </nav>
            </div>
        </header>
    )
}

export default Header