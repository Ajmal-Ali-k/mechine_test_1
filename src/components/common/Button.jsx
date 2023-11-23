import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Button({bgColor}) {
  return (
    <button className={`${bgColor} px-2 mt-3 py-1 flex items-center justify-center gap-2 rounded-md`}>
      <h2 className="font-normal text-sm">Get Started</h2>
      <span>
        <FaLongArrowAltRight />
      </span>
    </button>
  );
}

export default Button;
