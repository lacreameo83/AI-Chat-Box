import React, { useContext, useEffect } from 'react'
import SideBarItems from "./SideBarItems";
import image from '../../../../public/1671100359865.jpg'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { GloblalContext } from '../../../utilitie/GloblaContext';
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import LayersIcon from "@mui/icons-material/Layers";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import IosShareIcon from "@mui/icons-material/IosShare";
import ModeNightIcon from "@mui/icons-material/ModeNight";

function Sidebar() {
  const { previousValue, ispreviousValue, setInputData, onSent } =
    useContext(GloblalContext);

  const handlePreviousValue =(item)=>{
    
      
         setInputData(item );
     onSent()
    
  }


  useEffect(() => {
    previousValue.forEach((item, index) => {
      
      localStorage.setItem(`item_${index}`, item);
    });
  }, [previousValue]); 

  return (
    <div className="  bg-white/50 h-[125vh]  md:h-[100vh] flex flex-col  items-start shadow-md  ">
      <div className="h-[8vh] w-[100%] border-b-[1px] flex items-center justify-center shadow-sm">
        <h1 className="ml-5">
          <span className="font-[900]">HORIZON</span> AI FREE
        </h1>
      </div>
      {/* display of the side bars */}
      <div className="flex flex-col justify-between w-[100%]    md:h-[92vh] md:w-[28vw] lg:w-[13vw]">
        <div className="  px-3  ">
          <div className="font-[900] flex items-center gap-2">
            <img
              className="h-[40px] w-[40px]"
              src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
            />
            <h3>Chat Ui</h3>
          </div>

          <SideBarItems
            icon={<LayersIcon sx={{ width: "17px" }} />}
            primary="My Projects"
            icon2="pro"
          />
          <SideBarItems
            icon={<HomeIcon sx={{ width: "17px" }} />}
            primary="Template"
            icon2="pro"
          />
          <SideBarItems
            icon={<BookmarksIcon sx={{ width: "17px" }} />}
            primary="Other Pages"
            icon2="pro"
          />
          <SideBarItems primary="Promo Page" />
          <SideBarItems primary="Promo Page" />
          <SideBarItems primary="Promo Page" />

          {/* previous value */}
          <div className="pl-2 h-[20vh] displayResult  overflow-y-scroll">
            {ispreviousValue ? (
              <div className="  m-auto bg-stone-100">
                <h2 className="font-[900] sticky top-0 bg-stone-50 h-[5vh]  text-center pt-2">
                  Previous Search
                </h2>

                {previousValue.map((item, index) => (
                  <div
                    onClick={() => handlePreviousValue(item)}
                    className="flex items-center"
                    key={index}
                  >
                    <p className="text-[12px]">{index},</p>
                    <p className="p-1 text-[12px]">{item}.</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <SideBarItems
                  icon={<LockIcon sx={{ width: "17px" }} />}
                  primary="Admin Page"
                  icon2="pro"
                />
                <SideBarItems primary="All Template" />
                <SideBarItems primary="Promo Page" />
              </div>
            )}
          </div>
        </div>
        {/* bottom div */}
        <div className="flex items-center flex-col gap-2 ">
          <div className=" relative   w-[99%]  mx-auto  ">
            <div className=" h-[80px] mb-[-35px] z-10 relative m-auto w-[80px]  border-[4px]  bg-[#4A25E1] rounded-full flex items-center justify-center lg:w-[50px] lg:h-[50px] lg:mb-[-20px]">
              <div className="h-[30px] flex items-center justify-center w-[30px] rounded-[100%] bg-white">
                <ModeNightIcon
                  sx={{ color: "#6d4def", width: "60px", rotate: "10px" }}
                />
              </div>
            </div>
            <div className="w-[98%] py-10 flex flex-col  items-center  md:h-[20vh]  gap-2 justify-between p-2 md:w-[100% ] py-5   bg-[#4A25E1] rounded-2xl text-white text-[19px] lg:text-[12px]  md:text-[12px] lg:py-5">
              <div className="flex flex-col    justify-center ">
                <h2>Go unlimited with PRO</h2>
                <p>Get your AI Project to another</p>
                <p>level and start doing more with</p>
                <p>Horizon AI Template PRO!</p>
              </div>
              <button className="bg-[#6d4def] p-1 rounded-2xl my-1">
                Get started With Pro
              </button>
            </div>
          </div>
          <div className="mx-auto w-[91%]   ">
            <div className="flex items-center shadow-sm rounded-md bg-white h-[4vh] ">
              <div className="h-[30px] w-[30px] rounded-[100%] ">
                <img
                  className="h-[30px] object-fit w-[30px] rounded-[100%] "
                  src={image}
                />
              </div>
              <p className="">osonwa precious</p>
              <IosShareIcon sx={{ marginLeft: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
