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
    <div className="shadow-lg  bg-white/50  h-[100vh] flex flex-col  items-start   ">
      <div className="h-[10vh] w-[100%] border-b-[1px] flex items-center justify-center">
        <h1 className="ml-5">
          <span className="font-[900]">HORIZON</span> AI FREE
        </h1>
      </div>
      {/* display of the side bars */}
      <div className="flex flex-col justify-between h-[90vh]">
        <div className=" w-[13vw] pl-1  ">
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
        </div>
        {/* previous value */}
        <div className="pl-2 h-fit displayResult  overflow-y-scroll">
          {ispreviousValue ? (
            <div className=" m-auto bg-stone-100">
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
          <div className="mx-auto my-2 w-[91%]   ">
            <div className="flex items-center shadow-sm rounded-md bg-stone-50 h-[4vh] ">
              <div className="h-[30px] w-[30px] rounded-[100%] ">
                <img
                  className="h-[30px] object-fit w-[30px] rounded-[100%] "
                  src={image}
                />
              </div>
              <SideBarItems primary="Osonwa presh " />
              <IosShareIcon sx={{ marginLeft: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
