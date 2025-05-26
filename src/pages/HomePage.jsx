import React from "react";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import StatSection from "../components/stat-section";
import Timeline from "../components/timeline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <div>
   <NavBar/>
     <HeroSection/>
     <AboutSection/>
     <StatSection/>
     <Timeline/>
    <Footer/>
    </div>
  );
}

