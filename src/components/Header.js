import React from "react";
import { HAMBURGE_ICON, YOUTUBE_ICON, USER_ICON } from "../utils/constants";
const Header = () => {
  return (
    <div className="grid grid-flow-col m-2 py-2 shadow">
      {/* youtube icons */}
      <div className="flex col-span-1">
        <img className="h-8" src={HAMBURGE_ICON} />
        <img className="h-8" src={YOUTUBE_ICON} />
      </div>
      {/* search */}
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-500 rounded-l-full py-1 px-2"
          type="text"
        />
        <button className=" border border-gray-500 rounded-r-full  py-1 px-2 bg-gray-300">
          search
        </button>
      </div>
      {/* user icon  */}
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
