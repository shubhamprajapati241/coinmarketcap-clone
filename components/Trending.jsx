import React, { useState } from "react";
import fire from "../assets/fire.png";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import usdt from "../assets/usdt.png";
import gainers from "../assets/gainers.png";
import recent from "../assets/recent.png";
import ReactSwitch from "react-switch";
import Rate from "./cmc-table/Rate";
import TrendingCard from "./TrendingCard";
const trendingData = [
  {
    number: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: btc,
    isIncrement: true,
    rate: "2.34%",
  },

  {
    number: 2,
    symbol: "Eth",
    name: "Ether",
    icon: eth,
    isIncrement: false,
    rate: "9.34%",
  },
  {
    number: 3,
    symbol: "USDT",
    name: "Tether",
    icon: usdt,
    isIncrement: true,
    rate: "1.32%",
  },
];

const Trending = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-white">
      <div className="trendingWrapper mx-auto min-w-screen-2xl px-20">
        <div className="flex justify-between">
          <h1 className="text-2xl">
            Todays Cryptourrency Price by the Market Cap
          </h1>
          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div>
        <br />

        <div className="flex">
          <p className="text-gray-400">
            The global crypto market cap is $1.75 T, a
          </p>
          &nbsp; <Rate isIncrement={true} rate="0.53%" /> &nbsp;
          <p>
            decrease over the last day.{" "}
            <span className="font-normal underline">Read More</span>
          </p>
        </div>

        <br />

        <div className="flex">
          <TrendingCard
            icon={fire}
            title="Trending"
            trendingData={trendingData}
          />
          <TrendingCard
            icon={gainers}
            title="Biggest Gainer"
            trendingData={trendingData}
          />
          <TrendingCard
            icon={recent}
            title="Recently Added"
            trendingData={trendingData}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
