import React from "react";

import SectionTitle from "../components/SectionTitle";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <SectionTitle
        title="Why Choose Us"
        subtitle="What makes us different"
      />

      <ul className="max-w-xl mx-auto text-center space-y-3">
        <li>✔ Experienced Team</li>
        <li>✔ Modern Technology</li>
        <li>✔ Client-focused Approach</li>
      </ul>
    </section>
  );
};

export default WhyChooseUs;
