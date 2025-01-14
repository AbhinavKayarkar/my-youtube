import React, { useEffect, useState } from "react";
import {
  HAMBURGE_ICON,
  YOUTUBE_ICON,
  USER_ICON,
  YOUTUBE_SEARCH_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // Will run after each chnage in search Text.
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  // API call to get suggestions in search bar
  async function getSearchSuggestions() {
    const data = await fetch(YOUTUBE_SEARCH_URL + searchText);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
  }

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 py-2 shadow w-screen">
      {/* youtube icons */}
      <div className="flex col-span-1">
        <img
          onClick={toggleHandler}
          className="h-8 cursor-pointer"
          src={HAMBURGE_ICON}
        />
        <img className="h-8" src={YOUTUBE_ICON} />
      </div>
      {/* search */}
      <div className="col-span-10 text-center">
        <div>
          <input
            className="w-1/2 border border-gray-500 rounded-l-full py-1 px-2 focus-within:border-blue-200"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className=" border border-gray-500 rounded-r-full  py-1 px-2 bg-gray-300">
            search
          </button>
          {searchText && showSuggestion && (
            <div className="absolute bg-white w-[33rem] ml-[16rem] shadow mt-2">
              <ul className="text-start px-2 py-5">
                {suggestions.map((s) => (
                  <li className="hover:bg-gray-200" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* user icon  */}
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
