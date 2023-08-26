"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const location = [
  "Main Street 123, United State",
  "Business Avenue 456, Canada",
  "Park Road 787, United Kingdom",
  "Silicon Valley, India",
];

const LocationSelection = () => {
  const [loaction, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div>
        <Menu.Button>Menu Btn</Menu.Button>
        <Menu.Items>Menu Item</Menu.Items>
      </div>
    </Menu>
  );
};

export default LocationSelection;
