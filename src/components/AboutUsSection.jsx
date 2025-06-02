import women from "../../public/Second/happy-woman-with-scales-green-apple 1.png";
import img1 from "../../public/Second/Rectangle 2.png";
import img2 from "../../public/Second/Rectangle 3.png";
import img3 from "../../public/Second/Rectangle 4.png";
import arrow from "../../public/Second/Vector.svg";
import icon from "../../public/Second/material-symbols_spa.svg";

const AboutUsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="flex flex-col items-start">
        <p className="text-sm text-primary uppercase tracking-wide flex items-center gap-2">
          <span>
            <img src={icon} alt="icon" />
          </span>
          Why Choose WellnessPro!
        </p>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Transforming Lives
          <br />
          Through Care
        </h2>
        <img
          src={women}
          alt="Woman holding apple"
          className="w-full max-w-md mt-6"
        />
      </div>

      {/* Right Content */}
      <div className="space-y-16">
        {/* Card 1 */}
        <div className="flex items-start space-x-4">
          <img
            src={img1}
            alt="Health Guide"
            className="w-24 h-24 rounded object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
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
                <img src={arrow} alt="right arrow" />
              </span>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start space-x-4">
          <img
            src={img2}
            alt="Weight Loss Recipes"
            className="w-24 h-24 rounded object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
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
              <img src={arrow} alt="right arrow" />{" "}
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start space-x-4">
          <img
            src={img3}
            alt="Fitness Guide"
            className="w-24 h-24 rounded object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
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
              <img src={arrow} alt="right arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
