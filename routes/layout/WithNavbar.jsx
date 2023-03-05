import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../src/components/navBar/NavBar'

const WithNavbar = () => {
  return (<>
    <NavBar/>
    <Outlet/></>
  )
}

export default WithNavbar