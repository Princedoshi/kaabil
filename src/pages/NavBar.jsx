import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50  py-8 px-10 flex justify-between items-center  z-10">
      <h1 className='text-4xl font-greek text-white'>Kaabil.me</h1>
      <div className="flex space-x-6 text-white">
        {/* <a href="#about" className="hover:text-gray-300">About</a> */}
        {/* <a href="#contact" className="hover:text-gray-300">Contact</a> */}
      </div>
    </nav>
  );
}

export default NavBar;
