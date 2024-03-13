import React from 'react';
import "./calender.css";
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from "../../components/Navbar/Navbar"


import Calenderview from '../../components/CalenderView/Calenderview';
const Calendar =()=>{
    return(
        <div className='calenderview'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Calenderview/>
            </div>
        </div>
    )
}

export default Calendar;