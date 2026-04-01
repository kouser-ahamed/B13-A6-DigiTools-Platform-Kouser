import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 border-t border-purple-600/30">

      {/* Top Footer */}
      <div className="max-w-10/12 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Brand Section */}
        <div className="flex-1 text-center lg:text-left">

          <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4 transition-all duration-300">
            DigiTools
          </h2>

          <p className="max-w-xs sm:max-w-sm mx-auto lg:mx-0 leading-relaxed text-gray-300 text-sm sm:text-base transition-all duration-300">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>

        </div>


        {/* Links Section */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center lg:text-left">

          {/* Product */}
          <div>

            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Product
            </h4>

            <ul className="space-y-2">
              {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                <li
                  key={item}
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>

          </div>


          {/* Company */}
          <div>

            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Company
            </h4>

            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li
                  key={item}
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>

          </div>


          {/* Resources */}
          <div className="col-span-2 sm:col-span-1">

            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              Resources
            </h4>

            <ul className="space-y-2">
              {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>


        {/* Social Section */}
        <div className="flex flex-col items-center lg:items-end gap-4">

          <h4 className="text-white font-semibold text-base sm:text-lg">
            Follow Us
          </h4>

          <div className="flex gap-4">

            {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-white p-2.5 rounded-full text-black
                hover:bg-gradient-to-r hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600
                hover:text-white hover:scale-110 hover:shadow-lg
                transition-all duration-300 cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="max-w-10/12 mx-auto border-t border-gray-800 pt-8 mt-10
      flex flex-col md:flex-row items-center justify-between
      gap-4 text-sm text-center md:text-left">

        {/* Copyright */}
        <p className="text-gray-500">
          © 2026 DigiTools. All rights reserved.
        </p>

        {/* Thanks */}
        <p className="text-gray-500">
          Thanks Programming Hero
        </p>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">

          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <span
              key={item}
              className="hover:text-white cursor-pointer transition duration-300"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

    </footer>
  );
};

export default Footer;