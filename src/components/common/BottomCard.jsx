import React from "react";
import Button from "./Button";


const BottomCard = ({ data }) => {
  return (
    <div className="w-full xl:w-[48%]  ">
      <div className="bg-white  p-8 flex flex-col md:flex-row justify-between  md:h-64  shadow-xl rounded-lg ">
        <div className="">
          <p
            className={`text-xs py-1 ${data.btnColour} px-2 rounded-3xl inline-block`}
          >
            {data.badge}
          </p>

          <h2 className="text-2xl font-[600] pt-2">{data.name}</h2>
          <p className="text-xs leading-4 max-w-xs">{data.para}</p>
          <div>
            <Button bgColor={`bg-yellow-500`} />
          </div>
        </div>
        <div className="">
          <p className="font-normal text-sm">what you'll Get :</p>
          {data?.features.map((data, i) => (
            <div
              className="flex items-center pl-4  first-letter pt-4 font-medium text-sm text-black"
              key={i}
            >
              <span className="mr-4">
                {data.icon}
              </span>
             {data.label}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BottomCard;
// w-full xl:w-[48%] sm:h-80 md:h-44 xl:44 h-96