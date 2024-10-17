import React, { useContext } from 'react'
import SideBarItems from "./SideBarItems";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Button } from '@mui/material';
// import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { GloblalContext } from '../../../utilitie/GloblaContext';



function Sidebar() {
const {previousValue}=useContext(GloblalContext)
  return (
    <div className="shadow-lg  bg-white/50  h-[100vh] flex flex-col  items-start   ">
      <div className="h-[10vh] w-[100%] border-b-[1px] flex items-center justify-center">
        <h1 className="ml-5">
          <span className="font-[900]">HORIZON</span> AI FREE
        </h1>
      </div>
      {/* display of the side bars */}
      <div className="flex flex-col justify-between h-[90vh]">
        <div className=" w-[100%]  pl-12">
          <SideBarItems
            icon={<NotificationsNoneIcon sx={{ width: "17px" }} />}
            primary="Chat Ui"
          />
          <SideBarItems
            icon={<NotificationsNoneIcon sx={{ width: "17px" }} />}
            primary="All Template"
            icon2="pro"
          />
          <SideBarItems
            icon={<NotificationsNoneIcon sx={{ width: "17px" }} />}
            primary="All Template"
            icon2="pro"
          />
          <SideBarItems
            icon={<NotificationsNoneIcon sx={{ width: "17px" }} />}
            primary="All Template"
            icon2="pro"
          />
          <SideBarItems
            icon={<NotificationsNoneIcon sx={{ width: "17px" }} />}
            primary="All Template"
          />
        </div>
        {/* previous value */}
        <div className=" m-auto">
          <h2 className='font-[900]'>Previous Search</h2>
          {previousValue.map((items) => {
            return (
              <div>
                <p className="p-1">{items}</p>
              </div>
            );
          })}
        </div>
        {/* bottom div */}
        <div>
          <div className="relative w-[90%] mb-6 mx-auto    h-[20vh]">
            <div className="h-[60px] mb-[-30px] z-10 relative m-auto w-[60px] border-[4px]  bg-blue-700 rounded-full flex items-center justify-center">
              <DarkModeOutlinedIcon sx={{ color: "white", width: "60px" }} />
            </div>
            <div className="pt-7 flex flex-col items-center justify-center w-[100% ]  h-[90%] bg-blue-700 rounded-2xl text-white text-[10px]">
              <h2>Go unlimited with PRO</h2>
              <p>Get your AI Project to another</p>
              <p>level and start doing more with</p>
              <p>Horizon AI Template PRO!</p>
              <button className="bg-blue-600 p-1 rounded-2xl my-1">
                Get started With Pro
              </button>
            </div>
          </div>
          <div className="mx-auto my-2 w-[91%] shadow-sm rounded-md ">
            <SideBarItems
              icon={<NotificationsNoneIcon sx={{ width: "17px" }} />}
              primary="All Template"
              icon2="pro"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
