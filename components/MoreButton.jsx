import React from "react";
import RightArrow from "../assets/svg/rightArrow";

const MoreButton = () => {
  return (
    <div className="flex items-center text-[#6188FF] cursor-pointer whitespace-nowrap justify-between">
      More <RightArrow />
    </div>
  );
};

export default MoreButton;
