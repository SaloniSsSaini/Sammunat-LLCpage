import React from "react";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900 text-white px-8 py-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Sammunat</h1>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className="hidden md:flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
