import React from "react";
import { FaHome } from "react-icons/fa";

const CarouselSlide = ({
  beforeHighlight,
  highlightedText,
  afterHighlight,
  subtitle,
  image,
}) => {
  return (
    <section className="bg-[#E4EBF0] flex justify-center items-center px-4">
      <div className="hero-content h-auto md:h-[650px] flex flex-col-reverse md:flex-row-reverse w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-auto md:h-full">
          <img src={image} className="w-full h-auto md:h-full object-cover" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4 sm:px-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center mb-2">
            <FaHome className="text-[#fd390e] text-3xl" />
            <span className="ml-2 text-[#091E22] font-bold">
              Where dreams are deeded!
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#091E22]">
            {beforeHighlight}
            <span className="text-[#fd390e]">{highlightedText}</span>
            {afterHighlight}
          </h1>
          <p className="py-4 sm:py-6 text-[#6C7F89]">{subtitle}</p>
          <div className="flex justify-center md:justify-start">
            <button className="btn bg-[#fd390e] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;
