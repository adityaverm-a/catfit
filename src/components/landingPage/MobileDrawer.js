import React, { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Drawer from '../Drawer'

const DrawerItems = [
    {
        id: 1,
        label: 'Are you a Veterinarian?',
        path: '/vet',
    },
    {
        id: 2,
        label: 'Login',
        path: '/login',
    },
    {
        id: 3,
        label: 'Sign Up',
        path: '/signup',
    }
]

const MobileDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)

    return (
        <Drawer
            width='320px'
            drawerHandler={
                <div className='handler'>
                    <IoMdMenu size='32px' color='#10343D' />
                </div>
            }
            open={isDrawerOpen}
            closeButton={<IoMdClose size='32px' color='#10343D'/>}
            toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
        >
            <Scrollbars autoHide>
                <div className='drawerMenu'>
                    {DrawerItems.map(({ id, label, path }) => (
                        <Link
                            key={id}
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
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
