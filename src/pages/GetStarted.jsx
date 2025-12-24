import React from "react";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        Get Started with Sammunat
      </h1>

      <p className="max-w-xl text-gray-600 mb-6">
        Tell us about your project and our team will get back to you shortly.
      </p>

      <form className="w-full max-w-md flex flex-col gap-4">
        <input className="border p-3" placeholder="Your Name" />
        <input className="border p-3" placeholder="Your Email" />
        <textarea className="border p-3" placeholder="Project Details" />
        <button className="bg-blue-600 text-white py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
