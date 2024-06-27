import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-4/5 p-4 pointer-events-none">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl pointer-events-auto">
        Shop
      </button>
      <div className="flex space-x-4 pointer-events-auto">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl">
          Home
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl">
          Warenkorb
        </button>
      </div>
    </div>
  );
};

export default Navbar;
