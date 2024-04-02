import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-2 px-10 flex justify-between">
      <div className="flex gap-10 items-center">
        <div className="cursor-pointer flex gap-2 items-center">
          <div className="w-12 h-12 relative">
            <Image src="/Logo.png" alt="" layout="fill" />
          </div>
          <p className="font-bold text-lg">RH Chemistry</p>
        </div>
        <div className="flex justify-between">
          <p className="cursor-pointer p-2 px-6 font-medium hover:bg-[#F1F1F3] rounded-lg">Courses</p>
          <p className="cursor-pointer p-2 px-6 font-medium hover:bg-[#F1F1F3] rounded-lg">Home</p>
          <p className="cursor-pointer p-2 px-6 font-medium hover:bg-[#F1F1F3] rounded-lg">About Us</p>
          <p className="cursor-pointer p-2 px-6 font-medium hover:bg-[#F1F1F3] rounded-lg">Pricing</p>
          <p className="cursor-pointer p-2 px-6 font-medium hover:bg-[#F1F1F3] rounded-lg">Contact</p>
        </div>
      </div>
      <div className="flex">
        <div>
            <button type="button" className="p-2 px-4 rounded-lg font-medium">Login</button>
        </div>
        <div>
            <button type="button" className="p-2 px-4 font-medium rounded-lg text-white bg-[#6B398D]">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
