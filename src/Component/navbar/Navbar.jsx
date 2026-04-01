import React from "react";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = ({ cards }) => {
  return (

    <nav className="max-w-10/12 mx-auto flex item-center justify-between px-10 md:py-5 border-b border-gray-100 bg-white">

      <div className="text-4xl max-sm:mr-4 font-bold bg-gradient-to-r from-[#4F39F6] via-[#6C4CFF] to-[#7D63FF] bg-clip-text text-transparent">
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

        <div className="relative cursor-pointer group">
          {/* Cart Icon */}
          <FiShoppingCart
            size={28}
            className={`transition-all duration-300 ease-in-out ${cards.length > 0 ? "text-red-400" : "text-gray-600"} group-hover:text-purple-600`}
          />

          {/* Badge */}
          {cards.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              {cards.length}
            </span>
          )}
        </div>

        <a href="#" className="text-gray-700 max-sm:hidden hover:text-purple-600 font-medium transition-colors">
          Login
        </a>

        <button className="cursor-pointer bg-gradient-to-r from-[#4F39F6] via-[#6C4CFF] to-[#7D63FF] text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
          Get Started
        </button>

      </div>

    </nav>
  );
};

export default Navbar;