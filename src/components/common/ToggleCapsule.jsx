import React, { useState } from "react";

const ToggleCapsule = ({ state, setState }) => {
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className="border-2 border-black  w-64 rounded-full absolute bottom-0 right-16 mb-2">
      <div className="flex justify-around p-1 cursor-pointer">
        <div
          className={`px-8 py-2 rounded-full text-center text-sm font-semibold ${
            !state && "bg-[#91c7f0]"
          } `}
          onClick={handleClick}
        >
          Monthly
        </div>
        <div
          className={`px-8 py-2 rounded-full text-center text-sm font-semibold relative ${
            state && "bg-[#91c7f0]"
          } `}
          onClick={handleClick}
        >
          Anually
        <span className="text-green-500 font-normal absolute right-0 top-0">-10%</span>
        </div>
      </div>
    </div>
  );
};

export default ToggleCapsule;
