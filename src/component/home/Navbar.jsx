import React, { useContext, useState } from 'react'
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { GloblalContext } from '../../utilitie/GloblaContext';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Sidebar from './sidebar/Sidebar';

function Navbar() {
    const { dartmode, setDarkmode } = useContext(GloblalContext);
    const [isSidebar,setIsSideBar]=useState(false)
    const handleDarkMode =()=>{
        setDarkmode(!dartmode);
    }
    const handleSideBar =()=>{
setIsSideBar(!isSidebar);
    }
  return (
    <div>
      <div
        style={{
          borderBottomWidth: dartmode && "2px",
          borderColor: dartmode && "blue",
          backgroundColor: dartmode ? "black " : "white"
        }}
        className="flex items-center pb-3 justify-between px-5 h-[10vh] "
      >
        <div
          onClick={handleSideBar}
          style={{ color: dartmode ? "white" : "" }}
          className=" block md:hidden"
        >
          <MenuOutlinedIcon />
        </div>
        <div
          style={{
            color: dartmode && "white",
          }}
          className="font-[600] text-[20px]  "
        >
          <p>Chat Ui</p>
        </div>
        <div className="flex items-center gap-2 bg-white shadow-sm rounded-[50px] p-1">
          <div className="flex  items-center border-[2px] border-white  bg-blue-50 p-[1px] rounded-[50px] ">
            <SearchOutlinedIcon sx={{ width: "15px", opacity: "0.5" }} />
            <input
              placeholder=" search"
              className="w-[90px] text-[12px] outline-none bg-blue-50 md:w-[130px] rounded-[50px]"
              type="text"
            />
          </div>

          <NotificationsNoneIcon sx={{ width: "17px" }} />
          <div onClick={handleDarkMode}>
            <NightlightRoundIcon sx={{ width: "17px" }} />
          </div>

          <InfoOutlinedIcon sx={{ width: "17px" }} />

          <div className="h-[30px] w-[30px] rounded-[100%]">
            <img
              className="h-[30px] w-[30px] rounded-[100%]"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
            />
          </div>
        </div>
      </div>
      {isSidebar && (
        <div className="overflow-scroll w-[80vw] h-[100vh]  z-50 bg-white text-black transition-all top-0">
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default Navbar
