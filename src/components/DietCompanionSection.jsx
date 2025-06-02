import React from "react";
import { features } from "../data/featureData";
import icon from "../../public/Second/material-symbols_spa.svg";
import one from "../../public/Third/one.svg";
import two from "../../public/Third/two.svg";
import three from "../../public/Third/three.svg";
import four from "../../public/Third/four.svg";

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
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <img src={icon} alt="icon" className="w-6 h-6" />
          <h5 className="text-primary text-xs uppercase font-thin tracking-wide">
            Our Services
          </h5>
        </div>
      </div>
      <h1 className="text-center text-2xl mt-4 mb-16 font-semibold">
        Condition We Treat
        <span className="rounded-full bg-white px-3 py-1 absolute right-22 font-light shadow-lg">
          &larr;
        </span>
        <span className="rounded-full bg-secondary px-3 py-1 text-white absolute right-10 font-light shadow-lg">
          &rarr;
        </span>
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, idx) => {
          const iconSrc = iconMap[feature.icon];
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 flex flex-col items-center text-center space-y-8"
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={feature.title}
                  className="w-12 h-12 mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.description}</p>

              <button className="uppercase border text-secondary border-secondary px-2">
                Learn more
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DietCompanionSection;
