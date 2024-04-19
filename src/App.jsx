import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import User from './pages/users/User'
import Product from './pages/products/Product'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from './pages/login/Login'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)
  const Layout = ()=>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
         
        },
        {
          path: "users",
          element: <User />,
        },
        {
          path: "Products",
          element: <Product />,
        },
      ]
    },
// without anythings nav, menu, footer
    {
      path:'login',
      element:<Login/>
    }
    
  ]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
