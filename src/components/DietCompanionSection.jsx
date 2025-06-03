import React from "react";
import { features } from "../data/featureData";
import icon from "/Second/material-symbols_spa.svg";
import one from "/Third/one.svg";
import two from "/Third/two.svg";
import three from "/Third/three.svg";
import four from "/Third/four.svg";
import { motion } from "motion/react";

// Image icon map
const iconMap = {
  one,
  two,
  three,
  four,
};

const DietCompanionSection = () => {
  return (
    <section className="relative bg-[#5F6F520D] max-w-7xl mx-auto py-16 px-4">
      {/* Top Heading Section */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2">
          <img src={icon} alt="icon" className="w-6 h-6" />
          <h5 className="text-primary text-xs md:text-sm uppercase tracking-wide">
            Our Services
          </h5>
        </div>
      </motion.div>
      <motion.h1
        className="text-center text-2xl mt-4 mb-16 font-semibold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        Condition We Treat
        <span className="hidden md:inline-block rounded-full bg-white px-3 py-1.5 absolute right-22 font-light shadow-lg">
          &larr;
        </span>
        <span className="hidden md:inline-block rounded-full bg-secondary px-3 py-1.5 text-white absolute right-10 font-light shadow-lg">
          &rarr;
        </span>
      </motion.h1>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((feature, idx) => {
          const iconSrc = iconMap[feature.icon];
          return (
            <motion.div
              key={idx}
              className="bg-white rounded-xl py-8 px-4 flex flex-col items-center text-center space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {iconSrc && (
                <motion.img
                  src={iconSrc}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              )}
              <motion.h3
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-xs text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {feature.description}
              </motion.p>
              <motion.button
                className="uppercase border text-secondary border-secondary px-2"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Learn more
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default DietCompanionSection;
