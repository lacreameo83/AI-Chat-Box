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
      className='grid grid-cols-1 h-[100vh] sm:grid-cols-7   "'
    >
      <div className="hidden sm:block col-span-1 md:col-span-2 lg:col-span-1   ">
        <Sidebar />
      </div>
      <div className=" h-[100vh] sm:h-[100vh] sm:col-span-6 md:col-span-5 lg:col-span-6 pb-5  overflow-y-scroll ">
        <div className="h-[10vh] sticky top-0 z-50  ml-1 ">
          <Navbar />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default HomePage
