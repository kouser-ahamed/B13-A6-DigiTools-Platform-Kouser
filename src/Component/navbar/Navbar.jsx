import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = ({ cards }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-10/12 mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5 border-b border-gray-100 bg-white relative">

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <LuX
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <LuMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Logo */}
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent mx-3 md:mx-0">
        DigiTools
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium transition-all duration-300 ease-in-out">
        <a href="#" className="hover:text-purple-500 transition-colors">Products</a>
        <a href="#" className="hover:text-purple-500 transition-colors">Features</a>
        <a href="#" className="hover:text-purple-500 transition-colors">Pricing</a>
        <a href="#" className="hover:text-purple-500 transition-colors">Testimonials</a>
        <a href="#" className="hover:text-purple-500 transition-colors">FAQ</a>
      </div>

      {/* Right Side: Cart, Login, Button */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
        {/* Cart */}
        <div className="relative cursor-pointer group">
          <FiShoppingCart
            size={24}
            className={`transition-all duration-300 ease-in-out ${cards.length > 0 ? "text-red-400" : "text-gray-600"} group-hover:text-purple-600`}
          />
          {cards.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              {cards.length}
            </span>
          )}
        </div>

        {/* Login link */}
        <a href="#" className="hidden sm:inline text-gray-700 hover:text-purple-600 font-medium transition-colors">
          Login
        </a>

        {/* Get Started Button */}
        <button className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 
text-white px-3 sm:px-4 lg:px-5 
py-1.5 sm:py-2 lg:py-2.5 
rounded-full font-semibold 
text-xs md:text-sm lg:text-base 
whitespace-nowrap
transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 mt-2 bg-white shadow-lg flex flex-col gap-2 py-3 px-4 rounded-lg z-50
          transition-all duration-300 ease-in-out transform origin-top
          ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} md:hidden`}
      >
        <a href="#" className="hover:text-purple-500 transition-colors font-medium whitespace-nowrap">Products</a>
        <a href="#" className="hover:text-purple-500 transition-colors font-medium whitespace-nowrap">Features</a>
        <a href="#" className="hover:text-purple-500 transition-colors font-medium whitespace-nowrap">Pricing</a>
        <a href="#" className="hover:text-purple-500 transition-colors font-medium whitespace-nowrap">Testimonials</a>
        <a href="#" className="hover:text-purple-500 transition-colors font-medium whitespace-nowrap">FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;