import React, { useContext } from 'react'
import Sidebar from '../component/home/sidebar/Sidebar'
import Navbar from '../component/home/Navbar'
import { Outlet } from 'react-router-dom'
import { GloblalContext } from '../utilitie/GloblaContext'

function HomePage() {
    const { dartmode } = useContext(GloblalContext);
  return (
    <div
      style={{
        backgroundColor: dartmode ? "black" : "white",
      }}
      className='grid grid-cols-1 h-[100vh] sm:flex   "'
    >
      <div className="hidden w-[20vw] sm:w-[30vw] md:w-[20vw]   sm:block    ">
        <Sidebar />
      </div>
      <div className=" flex-1 ">
        <div className=" ">
          <Navbar />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default HomePage
