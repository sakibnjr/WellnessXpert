import logoDark from "../../public/contact/logoDark.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 py-4">
          <img src={logoDark} alt="Site Logo" className="size-10" />
          <span>WellnessXpert</span>
        </div>
        <ul className="flex gap-4 text-xs text-gray-500">
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
        </ul>
      </div>
      <hr />
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-x-2">
          <RiInstagramFill />
          <FaXTwitter />
          <FaFacebook />
          <FaYoutube />
        </div>
        <div className="text-xs text-gray-500">
          <p>Copyright {new Date().getFullYear()} | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
