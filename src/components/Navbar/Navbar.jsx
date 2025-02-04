import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Our Team",
    link: "#our-team",

  },
  {
    id: 3,
    title: "About Us",
    link: "#about-us",
  },
  {
    id: 4,
    title: "Contact Us",
    link: "#contact-us",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignInClick = () => {
    window.open("https://club.ieu.edu.tr/ogrenci-kulupleri", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl">IEU Software Community</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link || menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn" onClick={handleSignInClick}>
              Sign In
            </button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <IoMdMenu
            onClick={toggleMobileMenu}
            className="text-4xl cursor-pointer"
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 z-40 flex flex-col items-center justify-center">
          <ul className="space-y-6 text-2xl">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link || menu.path}
                  onClick={toggleMobileMenu}
                  className="text-black hover:text-secondary"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn" onClick={handleSignInClick}>
              Sign In
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
