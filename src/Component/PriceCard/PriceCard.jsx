import React from 'react';
import { FaCheck } from "react-icons/fa"; 

const PriceCard = () => {
  return (
    <section className="bg-white py-28 mt-10">
      <div className="w-9/12 mx-auto">

       <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">

          {/* Starter Card */}
          <div className="bg-white hover:shadow-2xl transition-all border border-gray-200 p-12 rounded-3xl shadow-md min-h-[450px] flex flex-col">
            <h3 className="text-xl font-bold text-gray-800">Starter</h3>
            <p className="text-gray-500 mb-6">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-gray-500">/Month</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> Basic templates
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> Community support
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> 1 project per month
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 transition">
              Get Started Free
            </button>
          </div>

          {/* Pro Card */}
          <div className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white p-12 rounded-3xl shadow-xl min-h-[450px] flex flex-col transition-all scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mt-2">Pro</h3>
            <p className="opacity-80 mb-6">Best for professionals</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$29</span>
              <span className="opacity-90">/Month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <FaCheck size={14} /> 
                Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck size={14} /> 
                Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck size={14} /> 
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck size={14} />
                Unlimited projects
              </li>
               <li className="flex items-center gap-2">
                <FaCheck size={14} /> 
                Cloud sync
              </li>
               <li className="flex items-center gap-2">
                <FaCheck size={14} /> 
                Advanced analytics
              </li>
            </ul>
            <button className="w-full bg-white text-purple-700 py-3 rounded-2xl font-bold hover:bg-gray-100 transition">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-white hover:shadow-2xl transition-all border border-gray-200 p-12 rounded-3xl shadow-md min-h-[450px] flex flex-col">
            <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
            <p className="text-gray-500 mb-6">For teams and businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">$99</span>
              <span className="text-gray-500">/Month</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> 
                Everything in Pro
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} />
                Team collaboration
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> 
                Custom integrations
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} />
                 Dedicated support
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> 
                SLA guarantee
              </li>
              <li className="flex items-center gap-2 text-[#627382]">
                <FaCheck className='text-[#30B868]' size={14} /> 
                Custom branding
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceCard;