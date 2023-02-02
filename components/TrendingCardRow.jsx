import Image from "next/image";
import React from "react";
import Rate from "./cmc-table/Rate";

const TrendingCardRow = ({ number, name, symbol, icon, rate, isIncrement }) => {
  return (
    <div className="flex justify-between items-start py-2 w-auto">
      <p className="opacity-40">{number}</p>
      <div className="flex w-full">
        <div className="mx-5">
          <Image src={icon} alt="icon" width={30} height={30} />
        </div>
        <p className="font-bold">
          {name} &nbsp;
          <span className="text-gray-400">{symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
      <div></div>
    </div>
  );
};

export default TrendingCardRow;
