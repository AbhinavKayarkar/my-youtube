import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <Link to={"/watch?v=" + info.id}>
      <div className="p-2 m-3 shadow w-72 rounded-lg">
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbmnail" />
        <ul>
          <li className="font-bold">{title}</li>
          <li className="pt-2">{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;
