import React from 'react'
import './SideNavbar.css'
import { Link } from 'react-router-dom'
import home from '../../icons/home.png'
import timesheet from '../../icons/timesheet.png'
import client from '../../icons/client.png'
import project from '../../icons/project.png'
import { STRING_TEAMWORK } from '../../utils/strings'

const SideNavbar = ({ children }) => {

    const menuItem = [
        {
            path: '/',
            name: 'Home',
            icon: home
        },
        {
            path: '/timesheet',
            name: 'Timesheet',
            icon: timesheet
        },
        {
            path: '/client',
            name: 'Client',
            icon: client
        },
        {
            path: 'project',
            name: 'Project',
            icon: project
        }
    ]

    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <div className="top_section">
                    <Link className='logo-link' to='/'>
                        <h1 className='logo'>{STRING_TEAMWORK}<span style={{ color: '#FF22B1' }}>.</span></h1>
                    </Link>
                </div>
                {
                    menuItem.map((item, index) => (
                        <li key={index} className='link'>
                            <Link className='link-dom' to={item.path}>
                                <img src={item.icon} alt="" />
                                <div className="link_text">{item.name}</div>
                            </Link>
                        </li>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default SideNavbar;