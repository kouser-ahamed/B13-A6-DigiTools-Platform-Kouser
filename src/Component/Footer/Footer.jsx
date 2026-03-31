import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 border-t border-purple-600/30">

     
      <div className="max-w-10/12 mx-auto flex flex-col lg:flex-row gap-10">
    
        <div className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-4">
            DigiTools
            </h2>
          <p className="max-w-xs leading-relaxed text-gray-300">

            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>

        </div>
       
        <div className="flex-1 grid grid-cols-3 gap-8">

          <div>
            <h4 className="text-white font-semibold mb-4">
                Product
                </h4>
            <ul className="space-y-2">

              {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                <li key={item} className="hover:text-purple-400 
                cursor-pointer transition duration-300">{item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">
                Company
                </h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item} className="hover:text-purple-400 cursor-pointer transition duration-300">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">
                Resources
                </h4>
            <ul className="space-y-2">
              {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li key={item} className="hover:text-purple-400 cursor-pointer transition duration-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      
        <div className="ml-auto flex flex-col gap-4 items-end">
          <h4 className="text-white font-semibold mb-2">
            Follow Us
            </h4>
          <div className="flex gap-3">
            {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, idx) => (
              <div key={idx} className="bg-white p-2 rounded-full text-black hover:bg-purple-500 hover:text-white transition duration-300 cursor-pointer">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

      </div>

      
      <div className="max-w-10/12 mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm mt-8 gap-4 md:gap-0">
        <p className="text-gray-500">
            © 2026 DigiTools. All rights reserved.
            </p>
        <p className="text-gray-500">
            Thanks Programming Hero
            
            </p>

        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <span key={item} className="hover:text-white cursor-pointer transition duration-300">{item}
            
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;