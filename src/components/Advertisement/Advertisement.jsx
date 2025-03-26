import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import property3 from "../../assets/images/slide_1.jpeg";

const Advertisement = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={property3}
          alt="Property"
          className="w-full h-56 object-cover"
        />

        <span className="absolute top-3 right-3 bg-[#fd390e] text-white text-sm font-semibold px-3 py-1 rounded">
          FOR SALE
        </span>

        <div className="absolute bottom-0 left-0 w-full  text-white text-sm flex items-center gap-2 p-2">
          <FaMapMarkerAlt />
          <span>Eastern Housing, Pallabi Phase-2, Mirpur</span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[#fd390e] text-xl font-bold">
          6,500,000.00 <span className="text-sm">BDT</span>
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">
          29 Katha North-East Facing Plot for Sale
        </h3>
      </div>
    </div>
  );
};

export default Advertisement;
