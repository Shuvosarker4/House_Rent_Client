// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/images/slide-3.avif";
import img2 from "../../assets/images/slide_1.jpeg";
import img3 from "../../assets/images/slide_2.avif";
import CarouselSlide from "./CarouselSlide";

const HeroCarousel = () => {
  const slides = [
    {
      headText: "Where dreams are deeded!",
      beforeHighlight: "Find Your ",
      highlightedText: "Perfect Home",
      afterHighlight: " Rent with Ease!",
      subtitle:
        "Discover the best rental listings, connect with homeowners, and secure your dream home effortlessly",
      image: img1,
    },
    {
      headText: "Experience elegance like never before!",
      beforeHighlight: "Luxury Living, ",
      highlightedText: "Affordable ",
      afterHighlight: "Home",
      subtitle:
        "Explore high-end apartments with breathtaking views and top-tier amenities!",
      image: img2,
    },
    {
      headText: "Your dream home is just a click away!",
      beforeHighlight: " ",
      highlightedText: "Hassle-Free ",
      afterHighlight: "Home Renting Experience",
      subtitle:
        "Fully furnished apartments and homes available for immediate rental",
      image: img3,
    },
  ];

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide
              headText={slide.headText}
              beforeHighlight={slide.beforeHighlight}
              highlightedText={slide.highlightedText}
              afterHighlight={slide.afterHighlight}
              subtitle={slide.subtitle}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
