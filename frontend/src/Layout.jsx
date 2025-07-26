import React from 'react'
import Home from './Components/Home/Home'
import Slider from './Components/Home/Slider'
import { Outlet } from 'react-router-dom'
import Tees from './Components/Tees/Tees'
function Layout() {
  return (
    <>
      <Home/>
      <Tees/>
      <Outlet/>
      <Slider/>
    </>
  )
}

export default Layout
