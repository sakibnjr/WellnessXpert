import icon from "/Second/material-symbols_spa.svg";
import rightImage from "/Fourth/image 22.png";
import step1 from "/Fourth/Icon.svg";
import step2 from "/Fourth/Icon(1).svg";
import step3 from "/Fourth/Icon(2).svg";
import step4 from "/Fourth/Icon(3).svg";
import GuideArrow from "./Logo/GuideArrow";
import { motion } from "motion/react";

const HowToStart = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="space-y-8 text-center md:text-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center justify-center md:justify-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={icon} alt="icon" className="w-6 h-6" />
            <h5 className="text-primary text-xs uppercase tracking-wide">
              How to Start
            </h5>
          </motion.div>

          <motion.h1
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Understanding Our Approach, <br /> It&apos;s easy to start today!
          </motion.h1>

          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nisi autem delectus ipsam et molestias officia suscipit possimus
            molestiae voluptatem.
          </motion.p>

          <motion.button
            className="uppercase bg-secondary text-white px-4 py-2 rounded hover:bg-green-900 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.07 }}
          >
            let&apos;s start today
          </motion.button>
        </motion.div>

        <motion.img
          src={rightImage}
          alt="Image"
          className="h-90"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-center md:justify-between space-y-4 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Step 1 */}
        <motion.div
          className="flex flex-col items-center space-y-2 w-50 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={step1} alt="Step1" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 1</p>
          <p>Calculate Your Ideal Weight</p>
        </motion.div>
        <motion.div
          className="rotate-90 md:rotate-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GuideArrow />
        </motion.div>
        {/* Step 2 */}
        <motion.div
          className="flex flex-col items-center space-y-2 w-50 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <img src={step2} alt="step2" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 2</p>
          <p>Choose Your Weight Loss Program</p>
        </motion.div>
        <motion.div
          className="rotate-90 md:rotate-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GuideArrow />
        </motion.div>
        {/* Step 3 */}
        <motion.div
          className="flex flex-col items-center space-y-2 w-50 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <img src={step3} alt="step3" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 3</p>
          <p>Follow Our Diet Guided Chart</p>
        </motion.div>
        <motion.div
          className="rotate-90 md:rotate-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GuideArrow />
        </motion.div>
        {/* Step 4 */}
        <motion.div
          className="flex flex-col items-center space-y-2 w-50 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <img src={step4} alt="step4" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 4</p>
          <p>Enjoy Your Perfect Fit Body</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowToStart;
