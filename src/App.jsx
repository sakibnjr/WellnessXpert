import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSection";
import DietCompanionSection from "./components/DietCompanionSection";
import HowToStart from "./components/HowToStart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="font-railway">
      <Hero />

      <Navbar />

      <AboutUsSection />

      <DietCompanionSection />

      <HowToStart />

      <Contact />

      <Footer />
    </main>
  );
};

export default App;
