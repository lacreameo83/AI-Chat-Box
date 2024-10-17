

function SideBarItems({ primary, icon, icon2 }) {
 
  return (
    <div className="h-[5vh] text-[13px]   font-[500] justify-between pr-3 flex items-center ">
      
      <div className="flex  items-center gap-1">
        <p>{icon}</p>

        <p>{primary}</p>
      </div>

      <p>
        {icon2 ? (
          <div className="flex items-center justify-center bg-blue-100 text-blue-600  h-[30px] w-[30px] rounded-md">
            <p className=""> {icon2} </p>{" "}
          </div>
        ) : (
          ""
        )}
      
      </p>
    </div>
  );
}

export default SideBarItems;
