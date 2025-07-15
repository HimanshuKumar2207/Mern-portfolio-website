import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
        <NavLink
          end={true}
          to="/project-admin"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && "bg-primary/10 border-r-4 border-primary"
            }`
          }
        >
          <img src={assets.list_icon} alt="" className="main-w-4 w-5" />
          <p className="hidden md:inline-block">Add Project</p>
        </NavLink>

        <NavLink
          end={true}
          to="/project-admin/listProject"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && "bg-primary/10 border-r-4 border-primary"
            }`
          }
        >
          <img src={assets.home_icon} alt="" className="main-w-4 w-5" />
          <p className="hidden md:inline-block"> Project Lists</p>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
