import React, { useState } from "react";
import ToggleCapsule from "./common/ToggleCapsule";
import PriceCard from "./common/PriceCard";
import BottomCard from "./common/BottomCard";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { IoMdCloudUpload } from "react-icons/io";
import { BiCheckDouble } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
const planData = [
  {
    type: "Basic",
    discount: 89.99,
    price: 9.99,
    btnColour: "bg-yellow-300",
    features: [
      {
        icon: <LuUser2 />,
        label: "up to 25 Users",
      },
      {
        icon: <IoMdCloudUpload />,
        label: "up to 25gb  Storage",
      },
      {
        icon: <MdOutlineEmail />,
        label: "Email Support",
      },
    ],
  },
  {
    type: "standard",
    discount: 189.99,
    price: 99.99,
    btnColour: "bg-red-300",
    features: [
      {
        icon: <LuUser2 />,
        label: "up to 50 Users",
      },
      {
        icon: <IoMdCloudUpload />,
        label: "up to 60gb  Storage",
      },
      {
        icon: <MdOutlineEmail />,
        label: "Email + Chat Support",
      },
    ],
  },
  {
    type: "Premium",
    discount: 389.99,
    price: 199.99,
    btnColour: "bg-purple-300",
    features: [
      {
        icon: <LuUser2 />,
        label: "up to 75 Users",
      },
      {
        icon: <IoMdCloudUpload />,
        label: "up to 100gb  Storage",
      },
      {
        icon: <MdOutlineEmail />,
        label: "Email + whatsapp Support",
      },
    ],
  },
];
const secondData = [
  {
    name: "Free Starter",
    badge: "Free Forever",
    para: "The quickest and easiest way to try Protocols with basic functionalities",
    btnColour: "bg-lime-300",
    features: [
      {
        icon: <LuUser2 />,
        label: "up to 8 Users",
      },
      {
        icon: <IoMdCloudUpload />,
        label: "up to 3gb  Storage",
      },
      {
        icon: <MdOutlineEmail />,
        label: "Email Support",
      },
      {
        icon: <BiCheckDouble />,
        label: "Basics of Documents,Task Flow Voting",
      },
    ],
  },
  {
    name: "Enterprice Plan",
    badge: "Let's Connect",
    para: "Effeortlessly customize and fine-tune service as your need shift",
    btnColour: "bg-blue-400",
    features: [
      {
        icon: <LuUser2 />,
        label: "up to 75 Users",
      },

      {
        icon: <BiCheckDouble />,
        label: "Customization of all other features",
      },
    ],
  },
];

const Main = () => {
  const [state, setState] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[94%] ">
          <div className="p-16  bg-white relative">
            <h1 className="font-bold text-2xl ">
              Choose a plan that's just for you !
            </h1>

            <ToggleCapsule setState={setState} state={state} />
          </div>
          <div className="flex md:pb-8">
            <div className="px-10  xl:h-96  ">
              <div className="flex gap-7 flex-wrap">
                {planData.map((data, i) => {
                  return <PriceCard key={i} data={data} />;
                })}
              </div>
            </div>
          </div>
          <div className="px-10 py-5  h-96 flex flex-col md:flex-row gap-10  flex-1 flex-wrap ">
            {secondData.map((data, i) => (
              <BottomCard data={data} key={i} />
            ))}
          </div>
        </div>
        <div className="w-[6%] hidden xl:block">
          <div className="w-full h-full bg-[#C9E3F7] flex flex-col justify-between ">
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
