import React from "react";
import { USER_ICON } from "../utils/constants";

const LiveChats = ({ name, text }) => {
  return (
    <div className="flex items-center bg-slate-200 rounded-lg">
      <img className="w-8 h-8 p-1" src={USER_ICON} alt="user icon" />
      <div>
        <span className="pl-1 pr-2">{name} : </span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default LiveChats;
