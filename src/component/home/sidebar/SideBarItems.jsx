

function SideBarItems({ primary, icon, icon2 }) {
 
  return (
    <div className=" my-4 text-[13px]   font-[500] justify-between  flex items-center  ">
      <div className="flex  items-center gap-1">
        {icon ? <p > {icon} </p> : <p className="pl-5"></p>}

        <p>{primary}</p>
      </div>

      <div>
        {icon2 ? (
          <div className="flex items-center justify-center bg-blue-100 text-blue-600  h-[30px] w-[30px] rounded-md">
            <p  className=""> {icon2} </p>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SideBarItems;
