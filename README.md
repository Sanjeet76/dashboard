
## Dashboard Management System
Welcome to the Dashboard Management System! This application provides functionalities to manage products, orders, and view an  calendar view for orders Deliver on that day .

# Table of Contents
<ul>
    <li>Introduction</li>
    <li>Features</li>
    <li>Technology Stack</li>
    <li>Installation</li>
    <li>Usage</li>
    <li>Documentation</li>
    <li>Screenshots</li>
</ul>

# Introduction
The Dashboard Management System is a web application built using React.js. It allows users to manage products, view orders, and  expected delivery orders in a calendar view on that day.

# Features

### Dashboard 

<li>Display a summary of key metrics or features.</li>
 <li> Quick navigation links/buttons to Products, Orders management and calender pages.</li>



### Products Management 
 
<li> Present a list of products with details such as id ,name, category, price, discount, and  quantity using mock data.</li>
<li>
 Enable functionalities for  status ,add, delete, filter  products.
  </il>

### Orders Management 
<li> Show a list of orders, including details like tracking ID,product name, customer name, address, order date,delivery date, price, payment method,  and status using mock data.</li>
 <li>Enable functionalities to  status , delete, filter  order.</li>


### Orders Calendar View 
<li> show  a calendar view that displays orders on their expected delivery dates.</li>
<li>  Ability to click on a date to view all orders due for delivery on that day.</li>


# Technology Stack
The front-end of this application is built using React.js, Material UI


# Installation
 To run this project locally, follow these steps:

    1.Clone the repository:
        git clone https://github.com/Sanjeet76/dashboard.git

    2. Navigate to the project directory:
         cd dashboard

     3. Install dependencies:

        npm install
# Usage
npm start


# Documentation

 project structure
 ```       
src
|   App.css
|   App.js
|   App.test.js
|   index.css
|   index.js
|   logo.svg
|   Ordersdata.js
|   Productdata.js
|   reportWebVitals.js
|   setupTests.js
|   
+---components
|   +---CalenderView
|   |       calenderview.css
|   |       Calenderview.jsx
|   |       
|   +---Chart
|   |       chart.css
|   |       Chart.jsx
|   |       
|   +---Navbar
|   |       navbar.css
|   |       Navbar.jsx
|   |       
|   +---Order
|   |       order.css
|   |       Order.jsx
|   |       
|   +---OrderList
|   |       order.css
|   |       OrderList.jsx
|   |       
|   +---ProductForm
|   |       productform.css
|   |       ProductForm.jsx
|   |       
|   +---ProductList
|   |       product.css
|   |       ProductList.jsx
|   |       
|   +---Progress
|   |       progress.css
|   |       Progress.jsx
|   |       
|   +---Sidebar
|   |       sidebar.css
|   |       Sidebar.jsx
|   |       
|   \---widget
|           widget.css
|           Widget.jsx
|           
\---pages
    +---calender
    |       calender.css
    |       Calender.jsx
    |       
    +---home
    |       home.css
    |       Home.jsx
    |       
    +---orders
    |       orders.css
    |       Orders.jsx
    |       
    \---products
            product.css
            Product.jsx
            
```