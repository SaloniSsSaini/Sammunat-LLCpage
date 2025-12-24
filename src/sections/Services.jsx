import { servicesData } from "../data/servicesData";
import SectionTitle from "../components/SectionTitle";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <SectionTitle
        title="Our Services"
        subtitle="What we offer"
      />

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
