import logo from "../assets/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Universities", href: "#comparison" },
    { label: "Recommendation", href: "#latest-info" },
    { label: "Partners", href: "#partnership" },
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
        {isHome && (
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
        )}

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium"
          >
            Sign Up
          </Link>
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
            {isHome &&
              navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="cursor-pointer hover:text-gray-300 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            <Link
              to="/login"
              className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-4 py-2 rounded-md font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
