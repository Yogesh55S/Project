import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'

import Login from "./components/Register/Login";
import Shop from "./components/Register/Shop";
import Farmers from "./components/Register/Farmer";
import Ecom from "./components/shopage/Ecom";
import ShopRegistrationForm from "./components/shopage/Upload";
import  {RouterProvider, createBrowserRouter } from "react-router-dom"
import Dashboard from './components/Dashboard/shopboard.jsx';
import Coup from './components/Dashboard/coupon/couponform.jsx';
import Post from './components/shopage/buy/Postorder.jsx';
import Profile from './components/shopage/buy/Profile.jsx';
import Board from './components/F-Dashboad/Fashboard.jsx';
import Coupon from './components/F-Dashboad/Coupons.jsx';
import ItemDetails from './components/shopage/buy.jsx';
import Cart from './components/shopage/cart.jsx';
//import { Navbar } from 'react-bootstrap';

const router = createBrowserRouter([
    {path: "/", element:<App/>},
  {path: "/register", element:<Login/>},
  {path:"/shop", element:<Shop/>},
  {path:"/farmers", element:<Farmers/>},
  {path:"/market", element:<Ecom/>},
  {path:"/upload", element:<ShopRegistrationForm/>},
  {path:"/Dashboard", element:<Dashboard/>},
  {path:"/Coupons", element:<Coup/>},
  {path:"/post-order", element:<Post/>},
  {path:"/profile", element:<Profile/>},
  {path:"/fboard", element:<Board/>},
  {path:"/coupon", element:<Coupon/>},
  {path:"/ItemDetails", element:<ItemDetails/>},
  {path:"/cart", element:<Cart/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
