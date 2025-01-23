import React, { useEffect, useState } from "react";
import LiveChats from "./LiveChats";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChats } from "../utils/chatSlice";
import { generateRandomName, makeRandomText } from "../utils/helper";

const LiveChatList = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store.chats.liveChats);
  const [personalMsg, setPersonalMsg] = useState("");
  //console.log(chats);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addLiveChats({
          fullName: generateRandomName(),
          text: makeRandomText(20),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  const handleMessage = () => {
    dispatch(
      addLiveChats({
        fullName: "Abhinav Kayarkar",
        text: personalMsg,
      })
    );
    setPersonalMsg("");
  };

  //if (chats.length === 0) return null;
  return (
    <div className="flex flex-col">
      <div className="ml-2 p-2 border border-black w-[28rem] h-[500px] overflow-y-scroll">
        <h5 className="font-bold text-xl absolute bg-white w-[27rem] h-[3rem] -m-2 bg-opacity-90 ml-2 text-center">
          Live Chats
        </h5>
        <div className="flex flex-col-reverse">
          {chats?.map((chat) => {
            return <LiveChats fullName={chat.fullName} text={chat.text} />;
          })}
        </div>
      </div>
      <form className="m-2 w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-2/3 p-2 border border-black rounded-lg"
          type="text"
          placeholder="send a message"
          value={personalMsg}
          onChange={(e) => setPersonalMsg(e.target.value)}
        />
        <button
          className="px-5 py-2 bg-green-500 m-1 rounded-lg"
          onClick={handleMessage}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatList;
