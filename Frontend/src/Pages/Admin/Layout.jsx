import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { setToken, axios, navigate } = useAppContext;
  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
    try {
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.main_logo}
          alt=""
          className="w-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Sidebar */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
