import RightArrow from "./Logo/RightArrow";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/First/hero-bg.webp')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-[url('/First/mask.webp')] bg-cover bg-center" />

        <div className="w-4/5 mx-auto relative z-10 text-white h-screen flex items-center justify-center md:justify-end">
          <div className="space-y-6">
            <motion.h1
              className="text-xl md:text-3xl lg:text-5xl uppercase"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Boost your wellness <br /> fitness always
            </motion.h1>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.button
                className="uppercase flex items-center gap-1 bg-secondary text-white px-4 py-2 rounded hover:bg-green-900 transition"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.07 }}
              >
                Let's Start
              </motion.button>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                <motion.button
                  className="uppercase"
                  whileHover={{ scale: 1.07, color: "#a3e635" }}
                >
                  Contact us
                </motion.button>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                  <RightArrow color={`#fff`} />
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
