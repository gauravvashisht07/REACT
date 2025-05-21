import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import User from './components/User'

function App() {
   const router= createBrowserRouter([
        {
          path: "/",
          element: <><Navbar/><Home/></>
        },
        {
          path:"/login",
          element:<><Navbar/><Login/></>
        },
        {
          path:"/user/:username",
          element:<><Navbar/><User/></>
        },
    ])

  return (
    <>
     
      <RouterProvider router={router}/>
      <div className="">hii</div>
    </>
  )
}

export default App
