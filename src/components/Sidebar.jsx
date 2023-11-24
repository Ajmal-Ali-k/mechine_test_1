import React, { useState } from "react";
import image from "../assets/man.jpeg";
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { GiConversation } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const data = [
  {
    id: 1,
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: 2,
    name: "perks",
    icon: <PiPottedPlantFill />,
  },
  {
    id: 3,
    name: "Addons",
    icon: <IoExtensionPuzzle />,
  },
  {
    id: 4,
    name: "FAQ",
    icon: <GiConversation />,
  },
  {
    id: 5,
    name: "Support",
    icon: <BiSupport />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <aside
      className={`${
        open ? "w-[270px]" : "w-[55px]"
      } h-full  min-h-screen flex flex-col relative `}
    >
      <div className="w-[55px] flex absolute" onClick={handleClick} >
        <div className="w-full h-full text-black flex ">
          <div className=" p-4 text-blue-800 text-2xl">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <div
        className={`bg-white ${
          open ? "p-12" : "py-[116px]"
        } flex flex-col items-center justify-center mb-2 shadow-lg `}
      >
        <div
          className={`w-20 h-20 rounded-full overflow-hidden duration-500 ${
            open ? "flex" : "hidden"
          } items-center justify-center`}
        >
          <img src={image} alt="" />
        </div>
        <div className={`${open ? "flex" : "hidden"} justify-center items-center flex-col `}>
          <h3 className="pt-3 font-[600]">Ram Mohan</h3>
          <h4 className="text-sm font-normal">rammohan@gmail.com</h4>
        </div>
      </div>
      <div className="shadow-lg bg-white flex-1 flex justify-between flex-col">
        <ul className="py-5 pr-5 flex flex-col gap-3">
          {data.map((item, i) => (
            <li
              key={i}
              className={`flex  gap-2 items-center px-2 py-3 border-r-2 rounded-md hover:bg-[#91c7f0] shadow-md ${`sidebar-item ${
                item.id === activeTab ? "bg-[#91c7f0]" : ""
              }`}`}
              onClick={() => handleTabClick(item.id)}
            >
              <div className="p-1">{item.icon}</div>
              <div className={`${!open && "hidden"} origin-left duration-200`}>
                {item.name}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center p-5 justify-center font-semibold bg-[#c2e0f8] text-[#4f9cd8] mb-10">
          <span className={`${!open && "hidden"}`}>Logout</span>
          <span className="ml-2">
            <IoMdLogOut />
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
