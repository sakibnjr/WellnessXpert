import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Callicon from "./Logo/Callicon";
import CartLogo from "./Logo/Cart";
import SiteLogo from "./Logo/SiteLogo";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="w-full absolute top-0 left-0 right-0 z-20"
    >
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="flex items-center gap-2 text-white"
        >
          <SiteLogo />
          <span className="text-xl font-semibold">WellnessXpert</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          className="hidden md:flex items-center space-x-6 text-white uppercase text-sm"
        >
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#pages" className="hover:text-gray-300">
              Pages
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li className="flex items-center gap-1">
            <Callicon />
            <a href="tel:+408000246888" className="hover:text-gray-300">
              +(40) 800 0246 888
            </a>
          </li>
          <li>
            <button className="uppercase flex items-center gap-1 bg-secondary text-white px-4 py-2 rounded hover:bg-green-900 transition">
              <CartLogo />
              Let's Start
            </button>
          </li>
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <motion.div
          whileTap={{ scale: 0.85 }}
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </motion.div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay for closing by clicking outside */}
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-20 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Mobile Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4 text-white text-sm uppercase fixed top-0 right-0 w-3/4 h-full z-30 shadow-2xl"
            >
              {/* Close Icon */}
              <div className="flex justify-end mb-2">
                <button
                  aria-label="Close menu"
                  className="text-2xl text-white hover:text-gray-300 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <HiOutlineX />
                </button>
              </div>
              {/* Nav Links ... */}
              <motion.a
                whileHover={{ scale: 1.08, color: "#a3e635" }}
                href="#home"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08, color: "#a3e635" }}
                href="#about"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08, color: "#a3e635" }}
                href="#services"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08, color: "#a3e635" }}
                href="#pages"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Pages
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08, color: "#a3e635" }}
                href="#blog"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08, color: "#a3e635" }}
                href="#contact"
                className="block hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </motion.a>
              <div className="flex items-center gap-2">
                <Callicon />
                <a
                  href="tel:+408000246888"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  +(40) 800 0246 888
                </a>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#166534" }}
                className="uppercase w-full flex justify-center items-center gap-1 bg-secondary text-white px-4 py-2 rounded hover:bg-green-900 transition"
                onClick={() => setIsOpen(false)}
              >
                <CartLogo />
                Let's Start
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
