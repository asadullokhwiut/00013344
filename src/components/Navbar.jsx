import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Universities", href: "#comparison" },
    { label: "Prices", href: "#latest-info" },
    { label: "Partnerships", href: "#partnership" },
    { label: "About Us", href: "#integration" },
  ];

  return (
    <nav className="w-full bg-[#5F1B96] text-white py-4 px-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="EduMatch Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">EduMatch</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="cursor-pointer hover:text-gray-300 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium">
            Log In
          </button>
          <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium">
            Sign Up
          </button>
        </div>


        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-2">
          <ul className="flex flex-col gap-4 text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="cursor-pointer hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)} // auto-close menu
                >
                  {link.label}
                </a>
              </li>
            ))}
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium">
              Log In
            </button>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium mt-2">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
