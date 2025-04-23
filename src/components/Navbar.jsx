import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Universities', to: '/universities' },
    { label: 'Recommendation', to: '/recommendation' },
    { label: 'Partnership', to: '/partnership' },
    { label: 'About Us', to: '/about' },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="w-full bg-[#5F1B96] text-white py-4 px-4 shadow-md sticky top-0 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">EduMatch</span>
        </Link>


        {/* Center Nav Links */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          {navLinks.map((link) =>
            link.to ? (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-purple-300 transition">
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <a href={link.href} className="hover:text-purple-300 transition">
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Top Left Profile Icon */}
        <div className="absolute left-4 top-4 md:left-auto md:static flex items-center gap-4">
          {user ? (
            <Link to="/profile" title="Your Profile">
              <span className="text-white text-xl hover:text-purple-300 transition">👤</span>
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-purple-600 px-3 py-1 rounded text-sm hover:bg-purple-700 transition"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-purple-600 px-3 py-1 rounded text-sm hover:bg-purple-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;