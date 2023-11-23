import React from "react";
import Button from "./Button";
import { LuUser2 } from "react-icons/lu";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const BottomCard = () => {
  return (
    <>
      <div className="w-3/6 h-96 ">
        <div className="bg-white p-8 flex gap-3  shadow-xl rounded-lg ">
          <div className="">
            <h2 className="text-2xl font-[600]">Basic</h2>
            <h4 className="custom-diagonal-line-through">89</h4>
            <h1 className="text-2xl font-medium">
              $ 9.99 <span className="text-base">/mon</span>
            </h1>
            <div>
              <Button bgColor={`bg-red-500`} />
            </div>
          </div>
          <div>
            <p className="font-medium text-sm tracking-tight">what you'll Get :</p>
            <div className="flex items-center pl-4 pt-1 first-letter font-medium text-sm text-black">
              <span className="mr-4">
                <LuUser2 />
              </span>
              upto 25 users
            </div>
            <div className="flex items-center pl-4  font-medium text-sm text-black">
              <span className="mr-4">
                <IoMdCloudUpload />
              </span>
              upto 25gb storage
            </div>
            <div className="flex items-center pl-4  font-medium text-sm text-black">
              <span className="mr-4">
                <MdOutlineEmail />
              </span>
              email Support
            </div>
            <h2 className="pl-12 pt-3 font-semibold underline uppercase">
              Explore Features
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomCard;
