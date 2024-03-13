import React from 'react';
import "./orders.css";
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from "../../components/Navbar/Navbar"

import OrderList from '../../components/OrderList/OrderList';
const Orders =()=>{
    return(
        <div className='orders'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <OrderList />
            </div>
        </div>
    )
}

export default Orders