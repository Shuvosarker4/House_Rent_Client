import React from "react";
import { FaBuilding, FaHome } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const categories = [
  { name: "Office", icon: <FaBuilding /> },
  { name: "Plot", icon: <FaHome /> },
  { name: "Apartment", icon: <FaBuilding /> },
  { name: "Ready Flat", icon: <FaBuilding /> },
  { name: "Shed", icon: <FaBuilding /> },
  { name: "More", icon: <CiCircleMore /> },
];

const Property = () => {
  return (
    <div className="py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="w-32 h-32 lg:w-42 lg:h-42 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded-full">
              <span className="text-[#fd390e] text-2xl">{category.icon}</span>
            </div>
            <p className="text-gray-900 font-semibold mt-3">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
