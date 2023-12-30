/* ## Import Styles
--------------------------------------------- */
// IMPORT BOOTSTRAP
// import "../scss/bs-dynamic.scss"
import "./css/bs-compiled.css";

// IMPORT CUSTOM STYLES
import "./main.scss";

// IMPPORT BOXICONS
import "boxicons/css/boxicons.css";



import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import React, { useEffect } from "react";

import { date } from "./js/date.js";
import { animateCounter } from "./js/animate-counter.js";
import { skillPoints } from "./js/skill-points.js";
import { contactForm } from "./js/contact-form.js";
import { navigation } from "./js/navigation.js";
import { topLink } from "./js/top-link.js";

function App() {
  useEffect(() => {
    animateCounter();
    navigation();
    skillPoints();
    contactForm();
    date();
    topLink();
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
