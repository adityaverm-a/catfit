import React from 'react'
import { IoMdHome } from "react-icons/io"
import { IoChatbubblesSharp, IoLogOut } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Sidebar = () => {
    const dispatch = useDispatch()

  return (
    <div className="dashboard-sidebar">
        <div className="dashboard-sidebar__icon">
            <Link to='/dashboard' className="dashboard-sidebar__icon-inner">
                <IoMdHome className="dashboard-sidebar__icons" />
            </Link>
        </div>
        <div className="dashboard-sidebar__icon">
            <Link to='/chat' className="dashboard-sidebar__icon-inner">
                <IoChatbubblesSharp className="dashboard-sidebar__icons" />
            </Link>
        </div>
        <div className="dashboard-sidebar__icon">
            <div 
                className="dashboard-sidebar__icon-inner" 
                onClick={() => dispatch(logout())}
            >
                <IoLogOut className="dashboard-sidebar__icons" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar