import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import CategorySection from "../components/categories/CategorySection";
import Property from "../components/Property";
import AdvertisementSection from "../components/Advertisement/AdvertisementSection";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Property />
      <AdvertisementSection />
      <CategorySection />
    </div>
  );
};

export default Home;
