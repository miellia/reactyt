import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold">My Website</h2>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} My Website. All rights
                reserved.
              </p>
            </div>

            {/* Center Section */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-300 text-sm">
                Contact Us
              </a>
            </div>

            {/* Right Section */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.772-1.63 1.563v1.875h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.992 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 001.88-2.37 8.63 8.63 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9 12.14 12.14 0 01-8.8-4.46 4.27 4.27 0 001.33 5.7c-.64-.02-1.24-.2-1.76-.49v.05a4.28 4.28 0 003.44 4.19 4.27 4.27 0 01-1.92.07 4.28 4.28 0 004 2.97 8.57 8.57 0 01-5.31 1.83c-.35 0-.7-.02-1.04-.06a12.1 12.1 0 006.57 1.93c7.89 0 12.2-6.54 12.2-12.2 0-.19-.01-.38-.02-.57a8.6 8.6 0 002.1-2.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.22 0 3.584.012 4.85.07 1.17.054 2.217.24 3.055.512a6.532 6.532 0 012.418 1.576 6.532 6.532 0 011.576 2.418c.272.838.458 1.885.512 3.055.058 1.266.07 1.63.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 2.217-.512 3.055a6.532 6.532 0 01-1.576 2.418 6.532 6.532 0 01-2.418 1.576c-.838.272-1.885.458-3.055.512-1.266.058-1.63.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-2.217-.24-3.055-.512a6.532 6.532 0 01-2.418-1.576 6.532 6.532 0 01-1.576-2.418c-.272-.838-.458-1.885-.512-3.055-.058-1.266-.07-1.63-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-2.217.512-3.055a6.532 6.532 0 011.576-2.418A6.532 6.532 0 014.09 2.78c.838-.272 1.885-.458 3.055-.512C8.916 2.212 9.28 2.2 12 2.2m0-2.2C8.755 0 8.361.013 7.093.07 5.84.126 4.692.312 3.768.628a8.737 8.737 0 00-3.225 2.093A8.737 8.737 0 00.45 5.946C.134 6.87-.052 8.018.004 9.271.06 10.539.072 10.933.072 14.154s-.013 3.615-.07 4.883c-.056 1.253.086 2.401.404 3.325a8.737 8.737 0 002.093 3.225 8.737 8.737 0 003.225 2.093c.923.318 2.072.46 3.325.404 1.268-.057 1.663-.07 4.883-.07s3.615.013 4.883.07c1.253.056 2.401-.086 3.325-.404a8.737 8.737 0 003.225-2.093 8.737 8.737 0 002.093-3.225c.318-.923.46-2.072.404-3.325-.057-1.268-.07-1.663-.07-4.883s.013-3.615.07-4.883c.056-1.253-.086-2.401-.404-3.325a8.737 8.737 0 00-2.093-3.225A8.737 8.737 0 0020.232.628c-.923-.318-2.072-.46-3.325-.404C15.539.013 15.145 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
