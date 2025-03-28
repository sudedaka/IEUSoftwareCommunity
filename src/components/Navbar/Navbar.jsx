import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Events", link: "#events" },
  { id: 3, title: "Our Team", link: "#our-team" },
  { id: 4, title: "About Us", link: "#about-us" },
  { id: 5, title: "Feedback", link: "#feedback"},
  { id: 6, title: "Contact Us", link: "#contact-us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignInClick = () => {
    window.open("https://club.ieu.edu.tr/ogrenci-kulupleri", "_blank");
  };

  // Click control outside the menu
  const handleOutsideClick = (e) => {
    if (e.target.closest(".mobile-menu")) return;
    setIsMobileMenuOpen(false);
  };

  // Prevent body scrolling with menu dropdown
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center"
      >
        {/* Logo with text */}
        <div className="flex items-center gap-2">
          <img src="../assets/logo.png" alt="Logo" className="w-20 h-20" />
          <h1 className="font-bold text-4xl sm:text-3xl md:text-3xl py-2">IEU Software Community</h1>
          </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link || menu.path}
                  className="inline-block py-2 px-4 text-xl font-semibold hover:bg-secondary text-black rounded-lg transition duration-300"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button
              className="primary-btn px-6 py-3 text-white rounded-lg text-lg font-semibold"
              onClick={handleSignInClick}
            >
              Join Us
            </button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {!isMobileMenuOpen && (
            <IoMdMenu
              onClick={toggleMobileMenu}
              className="text-6xl cursor-pointer"
            />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40 flex flex-col items-center justify-center mobile-menu"
          onClick={handleOutsideClick}
        >
          <div className="absolute top-4 right-4">
            <IoMdClose
              onClick={toggleMobileMenu}
              className="text-6xl text-black cursor-pointer"
            />
          </div>
          <ul className="space-y-8 text-3xl">
            {NavbarMenu.map((menu) => (
              <motion.li
                key={menu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: menu.id * 0.1 }}
                className="w-full px-6 py-3 bg-white rounded-lg text-center shadow-md hover:bg-secondary cursor-pointer"
              >
                <a
                  href={menu.link || menu.path}
                  onClick={toggleMobileMenu}
                  className="text-black font-semibold"
                >
                  {menu.title}
                </a>
              </motion.li>
            ))}
            <motion.button
              className="primary-btn text-5xl md:text-3xl px-8 py-3 text-white rounded-lg mt-4"
              onClick={handleSignInClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Join us
            </motion.button>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
