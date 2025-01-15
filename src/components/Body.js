import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid grid-flow-col w-screen">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
