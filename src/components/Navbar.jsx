import React from "react";
import logo from "../assets/s-01.png";
import logo2 from "../assets/images.jpeg";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container h-28  flex items-center justify-between shadow-xl bg-[#C9E3F7] ">
      <div className="px-20 h-full w-[16%] flex items-center gap-5 bg-white">
        <img src={logo} alt="" width={50} height={50} />
        <div className="seperater"></div>
      </div>
      <div className="flex gap-2 mr-10 ">
        <div className="py-2 px-4 bg-white shadow-xl rounded-md flex gap-2 items-center">
          <img
            src={logo2}
            width={35}
            height={35}
            alt=""
            className="rounded-full"
          />
          <h4 className="text-base font-[500]"> xyz Enterprises pvt.Ltd</h4>
        </div>
        <div className="bg-white px-2 py-2 font-[600] shadow-xl flex items-center rounded-md">
          <FaAngleDown className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
