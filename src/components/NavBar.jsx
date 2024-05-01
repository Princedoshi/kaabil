import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-0 mt-10 py-8 px-10 flex justify-center items-center  z-10">
      <h1 className='text-4xl font-greek text-white'>Kaabil.<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">me</span></h1>
      <div className="flex space-x-6 text-white">
        {/* <a href="#about" className="hover:text-gray-300">About</a> */}
        {/* <a href="#contact" className="hover:text-gray-300">Contact</a> */}
      </div>
    </nav>
  );
}

export default NavBar;
