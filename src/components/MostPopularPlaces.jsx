import React from "react";

const MostPopularPlaces = () => {
  const places = [
    { name: "Mirpur, Dhaka", properties: "7.1K+" },
    { name: "Mohammadpur, Dhaka", properties: "5.2K+" },
    { name: "Uttara, Dhaka", properties: "3.1K+" },
    { name: "Badda, Dhaka", properties: "2.8K+" },
    { name: "Khilkhet, Dhaka", properties: "2.7K+" },
    { name: "Vatara, Dhaka", properties: "2.1K+" },
    { name: "Lalbag, Dhaka", properties: "1.9K+" },
    { name: "Rajshahi Sadar, Rajshahi", properties: "1.5K+" },
    { name: "Mymensingh Sadar, Mymensingh", properties: "1.5K+" },
    { name: "Rampura, Dhaka", properties: "1.5K+" },
    { name: "Dhanmondi, Dhaka", properties: "1.4K+" },
    { name: "Khulna Sadar, Khulna", properties: "1.4K+" },
  ];

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4">
        <h2 className=" mb-6 text-3xl sm:text-5xl text-center font-bold text-[#091E22]">
          Most Popular places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <h3 className="text-lg font-medium  text-[#fd390e]">
                {place.name}
              </h3>
              <p className="text-sm  text-[#091E22] font-extrabold mt-2">
                {place.properties} properties
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularPlaces;
