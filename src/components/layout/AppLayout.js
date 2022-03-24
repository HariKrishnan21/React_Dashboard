import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
const AppLayout = () => {
  return (
    <div style={{
        padding:'5px 0px 0px 370px',
    }}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout