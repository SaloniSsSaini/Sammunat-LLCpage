import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
      {children}
    </button>
  );
};

export default Button;
