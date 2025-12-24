import React from "react";

import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-20 px-10">
      <SectionTitle
        title="About Us"
        subtitle="Who we are and what we do"
      />
      <p className="max-w-3xl mx-auto text-center text-gray-600">
        Sammunat focuses on building scalable digital solutions for businesses worldwide.
      </p>
    </section>
  );
};

export default About;
