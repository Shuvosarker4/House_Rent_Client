import React from "react";
import CategoryCard from "../categories/CategoryCard";
import property1 from "../../assets/images/undraw_business-deal_nx2n.svg";
import property2 from "../../assets/images/undraw_apartment-rent_oodr.svg";
import property3 from "../../assets/images/undraw_buy-house_an72.svg";

const CategorySection = () => {
  const cardDetails = [
    {
      title: "Buy a Property",
      subtitle:
        "Find your dream home with ease. Explore a wide range of properties in prime locations.",
      image: property1,
      action: "Find a Rental",
    },
    {
      title: "Sell a Property",
      subtitle:
        "Looking to sell your property? Contact us for a quick and hassle-free selling experience. Get started today!",
      image: property3,
      action: "Place an ad",
    },
    {
      title: "Rent a Property",
      subtitle:
        "Discover affordable rentals in your preferred location. Move in hassle-free!",
      image: property2,
      action: "Discover",
    },
  ];
  return (
    <div className="p-5">
      <h1 className=" mb-6 text-3xl sm:text-5xl text-center font-bold text-[#091E22]">
        Available Service
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center m-4">
        {cardDetails.map((card, idx) => (
          <CategoryCard
            key={idx}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
            action={card.action}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
