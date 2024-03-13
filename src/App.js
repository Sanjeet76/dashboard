
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Orders from './pages/orders/Orders';
import Product from './pages/products/Product';
import Calendar from './pages/calender/Calender';
import ProductForm from './components/ProductForm/ProductForm';
import {  userColumns } from "./Productdata";


function App() {
  return (

 
    <Router >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} /> 
      <Route path="/products" element={<Product />} /> 
      <Route path="/calender" element={<Calendar />} /> 
      <Route path="/products/new" element={<ProductForm inputs={userColumns} title="Add New Product" />} /> 
    </Routes>
  </Router>
  );
}

export default App;
