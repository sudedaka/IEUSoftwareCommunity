import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import logo1 from "../../assets/logo1.png"; 
import logo2 from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer id="contact-us" className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* First Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">About Our Club</h1>
            <p className="text-dark2">
              Our club is dedicated to fostering a community of aspiring developers. We organize seminars, workshops, and collaborative projects to help you enhance your skills and enter the tech industry.
            </p>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Our Activities</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li className="cursor-pointer hover:text-secondary duration-200">Seminars</li>
                <li className="cursor-pointer hover:text-secondary duration-200">Workshops</li>
                <li className="cursor-pointer hover:text-secondary duration-200">Networking Events</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a href="#home">Home</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a href="#events">Events</a>
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a href="https://club.ieu.edu.tr/ogrenci-kulupleri" target="_blank" rel="noopener noreferrer">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Section - Logos & Social Media */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="flex space-x-6">
              <img src={logo1} alt="IEU Software Community Logo 1" className="w-[100px] object-contain" />
              <img src={logo2} alt="IEU Software Community Logo 2" className="w-[110px] object-contain" />
            </div>

            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex space-x-6 py-3">
              <a href="">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/ieusoftware?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/ieusoftwarecommunity/">
                <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
