import React from "react";
import Button from "./Button";

import { LuUser2 } from "react-icons/lu";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


const PriceCard = ({ data }) => {
  return (
    <div className="w-80 md:w-full xl:w-80 md:h-48  xl:h-96 my-4   ">
      <div className="bg-white p-8 flex flex-col md:flex-row xl:flex-col gap-3 md:justify-between shadow-lg rounded-lg ">
        <div className="xl:border-b-2 md:border-b-0 border-black pb-4">
          <h2 className="text-2xl font-[600]">{data.type}</h2>
          <h4 className="line-through text-red-500 ">{data.discount}</h4>
          <h1 className="text-2xl font-medium">
            $ {data.price}
            <span className="text-base">/mon</span>
          </h1>
          <div>
            <Button bgColor={data.btnColour} />
          </div>
        </div>
        <div>
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
     
          <h2 className="pl-12 pt-3 font-semibold text-sm underline uppercase">
            Explore Features
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
