import React from 'react';

const NavBar = () => {
  return (
    <nav className="relative mt-10 top-0 w-full bg-black bg-opacity-0 py-4 px-4 flex justify-center items-center z-10 sm:px-10 sm:py-8">
      <div className="flex items-center">
        <h1 className="text-2xl font-greek text-white sm:text-4xl">
          Kaabil.<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">me</span>
        </h1>
      </div>
      <div className="hidden sm:flex space-x-6 text-white">
        {/* <a href="#about" className="hover:text-gray-300">About</a> */}
        {/* <a href="#contact" className="hover:text-gray-300">Contact</a> */}
      </div>
      <div className="sm:hidden">
        {/* Add a mobile menu icon or button here */}
      </div>
    </nav>
  );
};

export default NavBar;