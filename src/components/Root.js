import React from 'react'
import Navig from "./navbar/Navig"
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div>
      <Navig/>
      <Outlet/>
    </div>
  )
}

export default Root;
