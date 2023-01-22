import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import WindowBar from "../WindowBar";
import { useState } from "react";

function Dashboard() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex flex-row w-full h-full bg-eerie-black">
      <SideBar expanded={expanded} setExpanded={setExpanded} />
      <div
        className={`h-full bg-white small:w-11/12 transition-[width] ease-linear duration-300 ${
          expanded ? "w-5/6" : "w-[97%]"
        }`}
      >
        <WindowBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
