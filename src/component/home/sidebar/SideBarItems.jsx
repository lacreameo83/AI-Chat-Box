

function SideBarItems({ primary, icon, icon2 }) {
 
  return (
    <div className=" my-4 text-[13px]   font-[500] justify-between  flex items-center  ">
      <div className="flex text-[15px] opacity-[40%] text-[#718096] h-[25px] items-center gap-2">
        {icon ? <p> {icon} </p> : <p className="pl-4 "></p>}

        <p>{primary}</p>
      </div>

      <div>
        {icon2 ? (
          <div className="flex items-center justify-center bg-[#F2EFFF] text-[#603CFF] font-[700] font-[Plus Jakarta Sans]  h-[20px] w-[40px] text-[12px]  rounded-[20px]">
            <p className=""> {icon2} </p>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SideBarItems;
