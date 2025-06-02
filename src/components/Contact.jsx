import contactbg from "../../public/contact/contactbg.png";
import icon from "../../public/Second/material-symbols_spa.svg";
import sign from "../../public/contact/Vector.png";

const Contact = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Left Content */}
          <div className="space-y-4 max-w-md text-white">
            <div className="flex items-center gap-2">
              <img src={icon} alt="icon" className="w-6 h-6" />
              <h5 className="text-primary text-xs uppercase font-thin tracking-wide">
                Contact Us
              </h5>
            </div>

            <h1 className="text-2xl text-black font-semibold">
              Have Any Question? <br /> Ask a Professional
            </h1>
            <p className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              <br />
              alias, rerum consequatur voluptas iste temporibus, maiores <br />
              praesentium illo labore dolorum eum aspernatur saepe sit hic{" "}
              <br />
              cupiditate autem voluptate quia vero.
            </p>
            <img src={sign} alt="Signature" />
            <p className="text-gray-800">
              Any problem about your booking? <br /> contact us on:
            </p>
            <p className="text-gray-800">
              +44 (0) 20 7686 3445 <br />
              info@scenarioarchitecture.com
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
            <h1 className="font-semibold mb-6">Schedule Discussion</h1>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
