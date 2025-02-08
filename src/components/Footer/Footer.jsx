import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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
          <div className="space-y-4 max-w-[400px]">
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
                <li className=" hover:text-secondary duration-200">Seminars</li>
                <li className=" hover:text-secondary duration-200">Workshops</li>
                <li className=" hover:text-secondary duration-200">Networking Events</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <ul className="space-y-2 text-lg text-dark2">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a href="#home">Home</a>
                </li>
                <li className=" hover:text-secondary duration-200">
                 Events
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  <a href="https://club.ieu.edu.tr/ogrenci-kulupleri" target="_blank" rel="noopener noreferrer">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Section - Address & Social Media */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Our Address</h1>
            <p className="text-dark2">
              İzmir University of Economics, Sakarya Caddesi, No:156, Balçova, İzmir, Turkey
            </p>

            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex space-x-6 py-3">
              <a href="">
              <FaWhatsapp className="cursor-pointer hover:text-[#f08127] hover:scale-105 duration-200" size={18} />
              </a>
              <a href="https://www.instagram.com/ieusoftware?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className="cursor-pointer hover:text-[#f08127] hover:scale-105 duration-200" size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ieusoftwarecommunity/">
                <FaLinkedin className="cursor-pointer hover:text-[#f08127] hover:scale-105 duration-200" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-gray-500 text-sm">
          IEU Software Community 2025 - All Rights Reserved
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
