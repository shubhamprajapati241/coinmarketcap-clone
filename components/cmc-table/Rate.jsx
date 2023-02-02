import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";

const Rate = ({ isIncrement, rate }) => {
  return (
    <div className="flex justify-center items-center">
      {isIncrement ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p className={isIncrement ? "text-[#17C784]" : "text-[#EA3943]"}>
        &nbsp;
        {rate}
      </p>
    </div>
  );
};

export default Rate;
