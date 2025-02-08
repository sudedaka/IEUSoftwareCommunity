import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from "../../assets/activities/slider1.jpg";
import slider2 from "../../assets/activities/slider2.png";
import slider3 from "../../assets/activities/slider3.png";
import slider4 from "../../assets/activities/slider4.jpg";
import slider5 from "../../assets/activities/slider5.jpg";
import slider6 from "../../assets/activities/slider6.png";

import Blob from "../../assets/blob.svg";

const images = [slider1, slider2, slider3, slider4, slider5, slider6];

const ImageSlider = ({ autoPlay = true, interval = 3000 }) => {
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
    <div className="relative w-full max-w-3xl mx-auto mt-12 bg-gray-100">
      {/* Blob Arkaplan */}
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        src={Blob}
        alt=""
        className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] md:max-w-[2000px] z-[1]"
      />

      {/* Slider İçerik */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-[400px] sm:h-[250px] md:h-[350px] lg:h-[350px] xl:h-[350px] overflow-hidden rounded-lg z-10" // her ekrana göre slider ayarı
        >
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Sol Ok */}
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-all duration-300"
        onClick={handlePrevClick}
        aria-label="Önceki Slide"
        role="button"
      >
        <FaArrowLeft />
      </button>

      {/* Sağ Ok */}
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-all duration-300"
        onClick={handleNextClick}
        aria-label="Sonraki Slide"
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
                ? "bg-[#f08127] scale-125" // Aktif durumu
                : "bg-[#bbb]" // İnaktif durumu
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
