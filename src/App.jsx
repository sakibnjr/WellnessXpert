import React from "react";
import heroBg from "../public/First/hero-bg.png";
import overlay from "../public/First/Clip path group.png";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSection";
import DietCompanionSection from "./components/DietCompanionSection";
import HowToStart from "./components/HowToStart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <img
        src={overlay}
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover z-1"
      />

      <Navbar />

      <Hero />

      <AboutUsSection />

      <DietCompanionSection />

      <HowToStart />

      <Contact />

      <Footer />
    </main>
  );
};

export default App;
