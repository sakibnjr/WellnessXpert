import logoDark from "/contact/logoDark.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-white px-4 py-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Logo and Title */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoDark} alt="Site Logo" className="size-10" />
          <span className="text-sm font-semibold">WellnessXpert</span>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          className="flex flex-wrap justify-center md:justify-end gap-3 text-xs text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <li className="text-black">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#facility">Our Facility</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>
      </motion.div>

      <hr className="my-4 border-gray-300" />

      {/* Bottom Row */}
      <motion.div
        className="w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Social Icons */}
        <motion.div
          className="flex gap-x-4 text-lg text-gray-600"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5 }}
        >
          <RiInstagramFill className="hover:text-black cursor-pointer" />
          <FaXTwitter className="hover:text-black cursor-pointer" />
          <FaFacebook className="hover:text-black cursor-pointer" />
          <FaYoutube className="hover:text-black cursor-pointer" />
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-xs text-gray-500 text-center sm:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>Copyright {new Date().getFullYear()} | All rights reserved</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
