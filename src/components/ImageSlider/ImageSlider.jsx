import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.jpg";
import Blob from "../../assets/blob.svg"; // Blob'u import ettik.

const images = [slider1, slider2, slider3];

const ImageSlider = ({ autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6 bg-gray-100"> {/* Set the gray background */}
      {/* Blob Arka Plan (Daha Büyük ve Belirgin Yapıldı) */}
      <motion.img
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        src={Blob}
        alt=""
        className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[1500px] md:w-[3000px] z-[1]"
        />

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[400px] overflow-hidden rounded-lg z-10"
      >
        <img
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Sol Ok */}
      <button
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>

      {/* Sağ Ok */}
      <button
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
