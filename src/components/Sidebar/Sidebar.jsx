import React from 'react';
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from "react-router-dom"


const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='top'>
                <a href="/" style={{ textDecoration: 'none',display: 'flex',alignItems:'center' }}>
                <img src="https://careers.entnt.in/static/media/entntlogo.2835c74a8d4d82f44c5e.jpeg" alt="" style={{ width: '30px', height: '30px', marginTop: "2px", marginRight: "4px" }} />
                <span className="logo">ENTNT</span>
                </a>

            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex',alignItems:'center'  }}>

                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </NavLink>

                    </li>
                    <p className="title">LISTS</p>

                    <li>
                        <NavLink to="/products" style={{ textDecoration: 'none' , display: 'flex',alignItems:'center'}}>

                            <StoreMallDirectoryIcon className="icon" />
                            <span>Products</span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/orders" style={{ textDecoration: 'none', display: 'flex',alignItems:'center' }}>
                            <CreditCardIcon className="icon" />
                            <span>Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calender" style={{ textDecoration: 'none', display: 'flex',alignItems:'center' }}>
                            <CalendarMonthIcon className="icon" />
                            <span>Calender</span>
                        </NavLink>
                    </li>

                    <li>
                        <LogoutIcon className="icon" />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar