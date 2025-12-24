import React from "react";

import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      {submitted ? (
        <p className="text-green-600">Thank you! We will contact you.</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input required className="border p-3" placeholder="Name" />
          <input required type="email" className="border p-3" placeholder="Email" />
          <textarea required className="border p-3" placeholder="Message" />
          <button className="bg-blue-600 text-white py-3 rounded">
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
