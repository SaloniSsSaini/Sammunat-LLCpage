import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Contact from "./sections/Contact";

import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <WhyChooseUs />
              <Contact />
            </>
          }
        />

        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
