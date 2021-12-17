import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Drawer from '../Drawer'

const MobileDrawer = ({ isLandingPage }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const DrawerItems = [
        {
            id: 1,
            label: isLandingPage ? 'Are you a Veterinarian?' : 'Home',
            path: isLandingPage ? '/vet' : '/',
        },
        {
            id: 2,
            label: 'Login',
            path: isLandingPage ? '/login' : '/vet-login',
        },
        {
            id: 3,
            label: 'Sign Up',
            path: isLandingPage ? '/signup' : '/vet-signup',
        }
    ]

    return (
        <Drawer
            width='320px'
            drawerHandler={
                <div className='drawerHandler'>
                    <IoMdMenu size='32px' color='#10343D' />
                </div>
            }
            open={isDrawerOpen}
            closeButton={<IoMdClose size='32px' color='#10343D'/>}
            toggleHandler={() => setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen)}
        >
            <Scrollbars autoHide>
                <div className='drawerMenu'>
                    {DrawerItems.map(({ id, label, path }) => (
                        <Link
                            key={id}
                            to={path}
                            offset={-70}
                            duration={500}
                            className='drawerLink'
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </Scrollbars>
        </Drawer>
    )
}

export default MobileDrawer
