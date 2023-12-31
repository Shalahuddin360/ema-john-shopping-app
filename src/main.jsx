import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import Home from './components/Layout/Home'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import cartProductsLoader from './CustomLoader/cartProductsLoader'


const router =createBrowserRouter([
  {
  path :'/',
  // element:<Shop></Shop>,
  element: <Home></Home>,
  children : [
    {
    path: '/',
    element:<Shop></Shop>
    },
    {
      path:'orders',
      element:<Orders></Orders>,
      // loader :()=>fetch('products.json')
      loader :cartProductsLoader
    },
    {
      path:'inventory',
      element: <Inventory></Inventory>
    },
    {
      path:'login',
      element: <Login></Login>
    },
 ]

}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* root setup  */}
   <RouterProvider router ={router}/>
  </React.StrictMode>,
)
