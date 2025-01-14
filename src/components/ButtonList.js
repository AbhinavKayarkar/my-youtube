import React from "react";
import Button from "./Button";

const buttons = [
  "All",
  "Fifa",
  "Cricket",
  "News",
  "Electronics",
  "Passive Income",
  "Trading",
  "Trending",
  "Music",
  "Football",
  "Laptops",
  "Mac","Music",
  "Football",
  "Laptops",
  "Mac"
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hidden w-screen">
      {buttons.map((b, index) => (
        <Button name={b} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
