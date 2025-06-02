import icon from "../../public/Second/material-symbols_spa.svg";
import rightImage from "../../public/Fourth/image 22.png";
import step1 from "../../public/Fourth/Icon.svg";
import step2 from "../../public/Fourth/Icon(1).svg";
import step3 from "../../public/Fourth/Icon(2).svg";
import step4 from "../../public/Fourth/Icon(3).svg";
import arrow from "../../public/Fourth/guidance_right-arrow.svg";

const HowToStart = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <img src={icon} alt="icon" className="w-6 h-6" />
            <h5 className="text-primary text-xs uppercase font-thin tracking-wide">
              How to Start
            </h5>
          </div>

          <h1 className="text-2xl font-semibold">
            Understand Our Approach, <br /> it&apos;s easy to start today!
          </h1>

          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nisi autem delectus ipsam et molestias officia suscipit possimus
            molestiae voluptatem.
          </p>

          <button className="uppercase flex items-center gap-1 bg-secondary text-white px-4 py-2 rounded hover:bg-green-900 transition">
            let's start today
          </button>
        </div>

        <img src={rightImage} alt="Image" className="h-90" />
      </div>

      <div className="flex justify-between mt-10">
        <div className="flex flex-col items-center space-y-2 w-50 text-center">
          <img src={step1} alt="Step1" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 1</p>
          <p>Calculate Your Ideal Weight</p>
        </div>
        <img src={arrow} alt="Guide Arrow" />
        <div className="flex flex-col items-center space-y-2 w-50 text-center">
          <img src={step2} alt="step2" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 2</p>
          <p>Choose Your Weight Loss Program</p>
        </div>
        <img src={arrow} alt="Guide Arrow" />
        <div className="flex flex-col items-center space-y-2 w-50 text-center">
          <img src={step3} alt="step3" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 3</p>
          <p>Follow Our Diet Guided Chart</p>
        </div>
        <img src={arrow} alt="Guide Arrow" />
        <div className="flex flex-col items-center space-y-2 w-50 text-center">
          <img src={step4} alt="step4" />
          <p className="text-light text-xs text-gray-500 uppercase">Step 4</p>
          <p>Enjoy Your Perfect Fit Body</p>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
