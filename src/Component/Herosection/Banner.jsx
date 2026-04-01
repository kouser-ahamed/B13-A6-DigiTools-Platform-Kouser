import React from "react";
import banner from '../../assets/banner.png';
import { BsCaretRight } from "react-icons/bs";

const Banner = () => {
   return (
       <section className="pt-20 pb-16 px-4 sm:px-6 md:px-8 bg-white">
           <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">

               {/* Left Content */}
               <div className="space-y-6 sm:space-y-8 text-center md:text-left">

                   <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-purple-100 text-purple-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium">
                       <span className="bg-indigo-600 w-3 h-3 border rounded-full"></span>
                       <p className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600  bg-clip-text text-transparent">
                           New: AI-Powered Tools Available
                       </p>
                   </div>

                   <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                       Supercharge Your <br />
                       Digital Workflow
                   </h1>

                   <p className="text-lg sm:text-xl text-gray-600 max-w-full">
                       Access premium AI tools, design assets, templates, and productivity <br className="hidden sm:inline" />
                       software—all in one place. Start creating faster today. <br />
                       Explore Products

                   </p>

                   {/* Buttons */}
                   <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">

                       {/* Explore Products Button */}
                       <button className="w-full sm:w-[300px] md:w-auto
bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600
cursor-pointer text-white
px-6 sm:px-8 py-3 sm:py-4
rounded-full font-semibold text-lg
whitespace-nowrap
transition-transform duration-300 ease-in-out hover:scale-105">
                           Explore Products
                       </button>


                       {/* Watch Demo Button */}
                       <button className="w-full sm:w-[300px] md:w-auto
border-2 border-[#4F39F6] bg-white text:
hover:bg-gradient-to-r hover:from-indigo-600 hover:via-violet-600 hover:to-purple-600 hover:text-white
cursor-pointer px-6 sm:px-8 py-3 sm:py-4
rounded-full font-semibold text-lg
whitespace-nowrap
flex items-center justify-center gap-2
transition-all duration-300 ease-in-out hover:scale-105">
                           <BsCaretRight />
                           Watch Demo
                       </button>

                   </div>
               </div>

               {/* Right Image */}
               <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                   <img
                       src={banner}
                       alt="AI Digital Workflow"
                       className="rounded-3xl shadow-2xl max-w-full h-auto"
                   />
               </div>
           </div>
       </section>
   );
};

export default Banner;
