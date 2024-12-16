"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const LINKS = [
    { id: "/", name: "Home" },
    { id: "/#about", name: "About" },
    { id: "/#services", name: "Services" },
    { id: "/#objectives", name: "Objectives" },
    { id: "/#events", name: "Events" }, 
    { id: "/#testimonials", name: "Testimonials" },
    { id: "/team", name: "Team" },
    { id: "/#contact", name: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-transparent bg-opacity-10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <img src="/fc_2.png" alt="Logo" className="h-10 w-auto mr-2" />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            {LINKS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="py-4 px-2 text-gray-700 font-semibold hover:text-black transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <a
              href="#join-us"
              className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              Join Us
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button bg-white bg-opacity-10 backdrop-blur-lg"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-16 left-0 w-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg z-50`}
      >
        <ul>
          {LINKS.map((item) => (
            <li key={item.id}>
              <a
                href={`${item.id}`}
                onClick={closeMenu}
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join-us"
              onClick={closeMenu}
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 hover:text-white"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
