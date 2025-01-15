import React from "react";
import LiveChats from "./LiveChats";

const LiveChatList = () => {
  return (
    <div>
        <h5 className="font-bold text-xl">Live Chats : </h5>
      <LiveChats name="Abhinav" text="this best react" />
    </div>
  );
};

export default LiveChatList;
