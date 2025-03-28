import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider0 from "../../assets/activities/slider0.png";
import slider1 from "../../assets/activities/slider1.png";
import slider2 from "../../assets/activities/slider2.png";
import slider3 from "../../assets/activities/slider3.png";
import slider4 from "../../assets/activities/slider4.png";
import slider5 from "../../assets/activities/slider5.png";
import slider6 from "../../assets/activities/slider6.png";
import slider7 from "../../assets/activities/slider7.png";
import Blob from "../../assets/blob.svg";

const images = [slider0,slider1,slider2,slider3,slider4,slider5,slider6,slider7];

const ImageSlider = ({ autoPlay = true, interval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(autoPlay);
  const slideIntervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlayActive) return;
    slideIntervalRef.current = setInterval(nextSlide, interval);

    return () => clearInterval(slideIntervalRef.current);
  }, [isAutoPlayActive, interval]);

  const handlePrevClick = () => {
    setIsAutoPlayActive(false); 
    prevSlide();
  };

  const handleNextClick = () => {
    setIsAutoPlayActive(false); 
    nextSlide();
  };

  return (
      <div className="relative w-full max-w-6xl mx-auto mt-40 bg-gray-100">
      {/* Blob Background*/}
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        src={Blob}
        alt=""
        className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] md:max-w-[2000px] z-[1]"
      />

         {/* Slider Content */}
         <div className="relative w-full h-auto max-h-[400px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[350px] xl:max-h-[300px] overflow-hidden rounded-lg z-10">
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Dot*/}
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-all duration-300"
        onClick={handlePrevClick}
        aria-label="Before Slide"
        role="button"
      >
        <FaArrowLeft />
      </button>

      {/* Right Dot */}
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-all duration-300"
        onClick={handleNextClick}
        aria-label="Next Slide"
        role="button"
      >
        <FaArrowRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-[#f08127] scale-125" // active
                : "bg-[#bbb]" // inactive
            }`}
            onClick={() => {
              setIsAutoPlayActive(false); 
              setCurrentIndex(index);
            }}
            aria-label={`Slide ${index + 1}`}
            role="button"
            whileHover={{ scale: 1.3, backgroundColor: "#00bcd4" }} 
          />
        ))}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #bbb; 
          transition: background-color 0.3s;
        }

        .swiper-pagination-bullet-active {
          background-color: #ff5733;
        }

        .swiper-pagination-bullet:hover {
          background-color: #00bcd4; 
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;