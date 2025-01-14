import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 p-5 shadow w-52">
      <Link to="/">
        <h1 className="font-bold py-1">Home</h1>
      </Link>
      <h1 className="font-bold py-2">Subscription</h1>
      <ul>
        <li>Zee Business</li>
        <li>NDTV Profit</li>
        <li>MoneyControl</li>
      </ul>
      <h1 className="font-bold py-2">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movie</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
      <h1 className="font-bold py-2">More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <h1 className="font-bold py-1">Settings</h1>
      <h1 className="font-bold py-1">Report history</h1>
      <h1 className="font-bold py-1">Help</h1>
      <h1 className="font-bold py-1">Send feedback</h1>
    </div>
  );
};

export default SideBar;
