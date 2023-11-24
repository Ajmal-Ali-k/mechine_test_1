import React from "react";
import logo from "../assets/s-01.png";
import logo2 from "../assets/images.jpeg";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container h-28  flex flex-col md:flex-row items-center justify-between shadow-xl bg-[#C9E3F7] ">
      <div className="px-4 sm:px-8 xl:px-16 h-full w-full sm:w-[16%] flex items-center justify-center md:justify-between sm:gap-2 bg-white overflow-hidden">
        <img
          src={logo}
          alt="Company Logo"
          className="h-14 w-14 sm:h-18 sm:w-12 object-contain mx-auto"
        />
         <div className="seperater hidden md:block ml-[51px]"></div>
      </div>

      <div className="flex gap-2 mr-10 ">
        <div className="py-2 px-4 bg-white shadow-xl rounded-md flex gap-2 items-center">
          <img
            src={logo2}
            alt="image"
            className="rounded-full w-9 h-9 object-contain"
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
