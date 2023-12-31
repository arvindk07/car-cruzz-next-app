"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const hours = ["10:00 AM", "12:00 AM", "14:00 AM", "16:00 AM"];

const HoursSelection = () => {
  const [hour, setHour] = useState("10:00 AM");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2">
            <FaClock className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Hours</div>
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <div className="text-[13px] font-medium text-seconday xl:text-left">
              {hour}
            </div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="text-[13px] font-medium text-seconday xl:text-left">
              {hour}
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {hours.map((item, index) => {
            return (
              <div
                onClick={() => setHour(item)}
                className="cursor-pointer py-4 text-center hover:bg-gray-50"
              >
                {item}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default HoursSelection;
