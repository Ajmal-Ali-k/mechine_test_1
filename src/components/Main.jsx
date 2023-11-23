import React, { useState } from "react";
import ToggleCapsule from "./common/ToggleCapsule";
import PriceCard from "./common/PriceCard";
import BottomCard from "./common/BottomCard";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Main = () => {
  const [state, setState] = useState(false);
  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-[94%]">
          <div className="p-16  bg-white relative">
            <h1 className="font-bold text-2xl ">
              Choose a plan that's just for you !
            </h1>
     
              <ToggleCapsule setState={setState} state={state} />
           
          </div>
          <div className="px-16 flex gap-7">
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
          <div className="flex px-16 gap-5">
            <BottomCard />
            <BottomCard />
          </div>
        </div>
        <div className="w-[6%]">
          <div className="w-full h-full bg-[#C9E3F7]  flex flex-col justify-between">
            <div className="self-end p-4 text-blue-800 text-2xl bg-white rounded-lg">
              <FaBell />
            </div>
            <div className="self-end text-2xl p-2 text-red-700 bg-[#a7c8e2]  rounded-3xl mb-5">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
