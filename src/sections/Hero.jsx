import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { companyInfo } from "../data/companyInfo";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-slate-800 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">
        {companyInfo.tagline}
      </h1>

      <p className="max-w-xl mb-6">
        {companyInfo.description}
      </p>

      <Button onClick={() => navigate("/get-started")}>
        Get Started
      </Button>
    </section>
  );
};

export default Hero;
