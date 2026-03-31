import React from "react";

const Navbar = () => {
  return (

    <nav className="max-w-10/12 mx-auto flex item-center justify-between px-10 md:py-5 border-b border-gray-100 bg-white">

      <div className="text-3xl max-sm:mr-4 font-bold bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
        DigiTools
      </div>


      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-purple-500 transition-colors">
          Products
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Features

        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Pricing
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          Testimonials
        </a>

        <a href="#" className="hover:text-purple-500 transition-colors">
          FAQ
        </a>
      </div>



      <div className="flex items-center gap-6">




        <a href="#" className="text-gray-700 max-sm:hidden hover:text-purple-600 font-medium transition-colors">
          Login
        </a>

        <button className="cursor-pointer bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600  text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
          Get Started
        </button>

      </div>

    </nav>
  );
};

export default Navbar;