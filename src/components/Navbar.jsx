import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">My Website</h1>
            </div>

            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                Home
              </a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                About
              </a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                Contact Us
              </a>
              <a href="#" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                Services
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-700">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-blue-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-blue-500"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-blue-500"
            >
              Services
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
