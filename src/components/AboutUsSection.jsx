import women from "/Second/happy-woman-with-scales-green-apple 1.png";
import img1 from "/Second/Rectangle 2.png";
import img2 from "/Second/Rectangle 3.png";
import img3 from "/Second/Rectangle 4.png";
import icon from "/Second/material-symbols_spa.svg";
import RightArrow from "./Logo/RightArrow";
import { motion } from "motion/react";

const AboutUsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 md:pb-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="text-xs text-primary uppercase tracking-wide flex items-center justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={icon} alt="icon" className="w-5 h-5" />
          Why Choose WellnessPro!
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Transforming Lives
          <br />
          Through Care
        </motion.h2>
        <motion.img
          src={women}
          alt="Woman holding apple"
          className="w-full max-w-xs sm:max-w-md mt-6"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Card 1 */}
        <motion.div
          className="flex items-start gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={img1}
            alt="Health Guide"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded object-cover"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Health & Diet Guide
            </h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut...
            </p>
            <a
              href="#"
              className="text-secondary uppercase text-sm font-semibold flex items-center gap-1 hover:underline"
            >
              Learn More
              <span className="text-secondary text-lg border rounded-full">
                <RightArrow color={`#4F6D36`} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex items-start gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <img
            src={img2}
            alt="Weight Loss Recipes"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded object-cover"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Weight Loss Recipes
            </h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut...
            </p>
            <a
              href="#"
              className="text-secondary uppercase text-sm font-semibold flex items-center gap-1 hover:underline"
            >
              Learn More
              <RightArrow color={`#4F6D36`} />
            </a>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex items-start gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={img3}
            alt="Fitness Guide"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded object-cover"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Body & Fitness Guide
            </h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel
              sodales sed nibh ut...
            </p>
            <a
              href="#"
              className="text-secondary uppercase text-sm font-semibold flex items-center gap-1 hover:underline"
            >
              Learn More
              <RightArrow color={`#4F6D36`} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
