import React from "react";
import banner from '../../assets/banner.png'


const Banner = () => {
    return (
        <section className="  pt-20 pb-16 px-6 md:px-8 bg-white">
            <div className="max-w-10/12 mx-auto grid md:grid-cols-2 gap-10 justify-between items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-medium">
                        <span className="bg-purple-600 w-3 h-3 border rounded-full"></span>
                        <p className="bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-3">
                        Supercharge Your <br />
                        Digital Workflow
                    </h1>

                    <p className="text-xl text-gray-600 max-w-full">
                        <span>
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today.<br />

                            Explore Products

                        </span>
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <button className="bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 cursor-pointer  text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                            Explore Products
                        </button>

                        <button className="border-2 border-purple-600  hover:bg-linear-to-r from-purple-600 via-violet-600 to-indigo-600 cursor-pointer hover:text-white  px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all">
                            <span>


                            </span>
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="">
                        <img
                            src={banner}
                            alt="AI Digital Workflow"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;