import React from "react";
import BannerPng from "../../assets/banner.svg";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa"; 

const JoinUs = () => {
  return (
    <section>
      <div className="container py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 space-y-6 md:space-y-0 md:items-center">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} // Smoother transition
          className="flex flex-col justify-center text-center md:text-left"
        >
          <div className="space-y-4 lg:max-w-[400px] mx-auto md:mx-0">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Build, Innovate,  
              and <span className="text-[#f08127] underline">Connect</span> with Our <span className="text-[#f08127] underline">Software Community</span> 
            </h1>
            <p className="text-dark2 text-base md:text-lg">
              Join a network of passionate engineers. Collaborate, grow, and stay ahead in the tech industry!
            </p>
            <a
              href="https://club.ieu.edu.tr/ogrenci-kulupleri"
              className="primary-btn !mt-6 flex items-center gap-4 md:gap-8 px-16 py-4 md:px-32 md:py-6 bg-[#f08127] text-white font-semibold text-xl md:text-2xl rounded-2xl shadow-md hover:bg-secondary transition-all"
            >
              <div className="flex items-center gap-2">
                <FaUsers size={18} /> 
                <span>Join Us</span>
              </div>
            </a>
          </div>
        </motion.div>
        
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} 
          className="flex justify-center items-center"
        >
          <img
            src={BannerPng}
            alt="Software Engineering Community"
            className="w-[280px] md:w-[350px] object-cover drop-shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
