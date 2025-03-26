import React from "react";

const CategoryCard = ({ title, subtitle, image, action }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm flex flex-col items-center">
      <figure className="w-full h-48 flex justify-center items-center p-5">
        <img
          src={image}
          alt={title}
          className="h-full object-cover rounded-xl"
        />
      </figure>

      <div className="card-body flex flex-col items-center text-center flex-grow">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#091E22]">
          {title}
        </h2>
        <p className="py-4 sm:py-6 text-[#6C7F89]">{subtitle}</p>
        <div className="card-actions">
          <button className="btn border-[#fd390e] text-[#fd390e] hover:bg-[#fd390e] hover:text-white transition-all duration-300">
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
