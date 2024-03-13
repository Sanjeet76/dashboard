import React from 'react';
import "./product.css";
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from "../../components/Navbar/Navbar"

import ProductList from '../../components/ProductList/ProductList';
const Product =()=>{
    return(
        <div className='products'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <ProductList />
            </div>
        </div>
    )
}

export default Product