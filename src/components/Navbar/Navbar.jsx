import React from 'react';
import "./navbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useState } from 'react';



const Navbar = () => {
    const [selectedDate, setSelectedDate] = useState("");


    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);

    };


    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon />
                </div>

                <div className="items">

                    <div className="item">
                        
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            onClick={() => console.log("Calendar opened")}
                            placeholder=''
                        />
                    </div>

                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>


                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>

                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>

                    </div>


                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHZhexegIyloQPri_e-DD9E3vaNH4Tuzj20NOEs6wbA&s" alt="" className="avatar"
                        />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar