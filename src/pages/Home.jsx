import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import CategorySection from "../components/categories/CategorySection";
import Property from "../components/Property";
import AdvertisementSection from "../components/Advertisement/AdvertisementSection";
import MostPopularPlaces from "../components/MostPopularPlaces";
import PoweredByMarquee from "../components/PoweredByMarquee";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Property />
      <AdvertisementSection />
      <CategorySection />
      <MostPopularPlaces />
      <PoweredByMarquee />
    </div>
  );
};

export default Home;
