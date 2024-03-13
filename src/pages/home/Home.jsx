import React from 'react';
import "./home.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Progress from '../../components/Progress/Progress';
import Chart from '../../components/Chart/Chart';
import Order from '../../components/Order/Order';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />

                </div>
                <div className="charts">
               
               <Progress />
               <Chart title="Last 6 months (Revenue )" aspect={2/1}/>
               </div>
              
               <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Order/>
                </div>
               
            </div>
        </div>
    );
};

export default Home;