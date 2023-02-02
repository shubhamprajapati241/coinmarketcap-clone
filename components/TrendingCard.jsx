import Image from "next/image";
import React from "react";
import MoreButton from "./MoreButton";
import TrendingCardRow from "./TrendingCardRow";

const TrendingCard = ({ icon, title, trendingData }) => {
  return (
    <div className="w-full p-5 py-3 mr-3 pb-0 bg-[#323546] rounded-xl text-white">
      <div className="flex justify-between items-center text-md mb-3">
        <div className="flex ">
          {icon && <Image src={icon} alt="icon" width={27} height={27} />}{" "}
          <h1 className="font-bold pl-2">{title}</h1>
        </div>

        <MoreButton />
      </div>

      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={item.number}
            name={item.name}
            symbol={item.symbol}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
          />
        );
      })}
    </div>
  );
};

export default TrendingCard;
