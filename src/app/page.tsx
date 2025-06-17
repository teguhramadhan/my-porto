"use client";
import React from "react";

import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import RecenProjects from "./components/RecentProjects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero2 />
      <RecenProjects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
