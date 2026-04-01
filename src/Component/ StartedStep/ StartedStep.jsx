import React from 'react';
import accont from "../../assets/user.png";
import pakers from "../../assets/package.png";
import roket from "../../assets/rocket.png";

const StartedStep = () => {
  return (
    <section className="bg-gray-100 py-28 mt-24">
      <div className="w-9/12 mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900">
            Get Started In 3 Steps
          </h1>
         <p className="text-[#627382] mt-4 text-lg">
  Start using premium digital tools in minutes, not hours.
</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">

          {/* Step 1 */}
          <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all p-12 text-center min-h-[450px] flex flex-col items-center justify-center">
            <span className="absolute top-6 right-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-base w-12 h-12 rounded-full flex items-center justify-center font-semibold">
              01
            </span>
            <img
              src={accont}
              alt="Create Account"
              className="w-24 h-24 mb-6 p-4 rounded-full bg-[#4F39F630]"
            />
            <h2 className="text-3xl font-semibold mb-3">
              Create Account
            </h2>
            <p className="text-gray-500 text-lg">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all p-12 text-center min-h-[450px] flex flex-col items-center justify-center">
            <span className="absolute top-6 right-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-base w-12 h-12 rounded-full flex items-center justify-center font-semibold">
              02
            </span>
            <img
              src={pakers}
              alt="Choose Products"
              className="w-24 h-24 mb-6 p-4 rounded-full bg-[#4F39F630]"
            />
            <h2 className="text-3xl font-semibold mb-3">
              Choose Products
            </h2>
            <p className="text-gray-500 text-lg">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all p-12 text-center min-h-[450px] flex flex-col items-center justify-center">
            <span className="absolute top-6 right-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white text-base w-12 h-12 rounded-full flex items-center justify-center font-semibold">
              03
            </span>
            <img
              src={roket}
              alt="Start Creating"
              className="w-24 h-24 mb-6 p-4 rounded-full bg-[#4F39F630]"
            />
            <h2 className="text-3xl font-semibold mb-3">
              Start Creating
            </h2>
            <p className="text-gray-500 text-lg">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartedStep;