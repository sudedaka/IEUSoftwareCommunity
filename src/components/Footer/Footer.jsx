import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const handleSignInClick = () => {
  // Yeni sekmede linki aç
  window.open("https://club.ieu.edu.tr/ogrenci-kulupleri", "_blank");
};

const Footer = () => {
  return (
    
    <footer id="contact-us" className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">About Our Club</h1>
            <p className="text-dark2">
              Our club is dedicated to fostering a community of aspiring developers. We organize seminars, workshops, and collaborative projects to help you enhance your skills and enter the tech industry.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Our Activities</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Seminars
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Workshops
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Networking Events
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#home">Home</a>
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    <a href="#events">Events</a>
                  </li>
              <li className="cursor-pointer hover:text-secondary duration-200">
            <a onClick={handleSignInClick} href="#" className="block">
                  Join Us
                </a>
              </li>

                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Contact
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
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
