import icon from "/Second/material-symbols_spa.svg";
import sign from "/contact/Vector.png";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-y-auto"
    >
      <div className="absolute inset-0 bg-[url('/contact/contactbg.png')] bg-cover bg-center" />

      <div className="w-11/12 mx-auto relative z-10 flex flex-col md:flex-row min-h-screen justify-center items-center gap-8 py-8">
        {/* Left Side: Text Info */}
        <motion.div
          className="space-y-4 max-w-md text-white text-center md:text-start"
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
              Contact Us
            </h5>
          </motion.div>

          <motion.h1
            className="text-xl sm:text-2xl text-black font-semibold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Have Any Question? <br /> Ask a Professional
          </motion.h1>

          <motion.p
            className="text-gray-500 text-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            <br />
            alias, rerum consequatur voluptas iste temporibus, maiores <br />
            praesentium illo labore dolorum eum aspernatur saepe sit hic <br />
            cupiditate autem voluptate quia vero.
          </motion.p>

          <motion.img
            src={sign}
            alt="Signature"
            className="mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />

          <motion.p
            className="text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Any problem about your booking? <br /> contact us on:
          </motion.p>
          <motion.p
            className="text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            +44 (0) 20 7686 3445 <br />
            info@scenarioarchitecture.com
          </motion.p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          className="bg-white rounded-lg shadow-lg px-4 py-6 sm:px-6 md:p-8 w-full max-w-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-lg sm:text-xl font-semibold mb-6">
            Schedule Discussion
          </h1>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your email
              </label>
              <input
                type="email"
                required
                placeholder="yourmail@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Write Your Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-secondary text-white font-medium rounded-md hover:bg-green-800 transition-colors"
              >
                Book a schedule
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
