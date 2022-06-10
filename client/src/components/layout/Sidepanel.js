import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { logout } from '../../actions/auth'

import LogoSrc from '../../images/catfitLogo-white.svg'


const Sidepanel = ({ children }) => {
    const dispatch = useDispatch()

    let location = useLocation()

  return (
    <div className="sidepanel">
        <div className="sidepanel-header">
            <img src={LogoSrc} alt="cat.fit" />
        </div>
        <div className="sidepanel-options">
            {children}
        </div>
        <div className="sidepanel-logout">
            <button 
                onClick={() => dispatch(logout())}
                className="primaryBtn sidepanel-logout__btn"
            >Logout</button>
        </div>
        {location.pathname.includes('dashboard') && (
            <div className="sidepanel-promo">
                <h6>Save big. <br /> Get Premium Subscription</h6>
            </div>
        )}
    </div>
  )
}

export default Sidepanel