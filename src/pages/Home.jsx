import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import CategorySection from "../components/categories/CategorySection";
import Property from "../components/Property";
import AdvertisementSection from "../components/Advertisement/AdvertisementSection";
import MostPopularPlaces from "../components/MostPopularPlaces";
import PoweredByMarquee from "../components/PoweredByMarquee";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Property />
      <AdvertisementSection />
      <CategorySection />
      <MostPopularPlaces />
      <Testimonials />
      <PoweredByMarquee />
    </div>
  );
};

export default Home;
