"use client";

import Image from "next/image";

export const Header = () => {
  return (
    <main className="bg-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="bg-white p-2 rounded-xl shadow-lg relative z-10">
            <Image
              src="/hero-image.png"
              alt="Job search"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-xl z-0" />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Your Career Here!
          </h1>
          <p className="text-gray-600 mt-4">
            Empowering Your Career Journey with Expert Guidance and Professional
            Tools.Explore our services and take the next step towards achieving
            your dream career!
          </p>

          {/* Search Filters */}
          <div className="bg-white shadow-md rounded-xl p-4 mt-6 flex flex-col md:flex-row gap-4">
            <select className="w-full md:w-1/3 border px-3 py-2 rounded-lg text-gray-600">
              <option>What</option>
            </select>
            <select className="w-full md:w-1/3 border px-3 py-2 rounded-lg text-gray-600">
              <option>Category</option>
            </select>
            <select className="w-full md:w-1/3 border px-3 py-2 rounded-lg text-gray-600">
              <option>Regions</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full md:w-auto">
              Find Jobs
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-4 text-sm text-gray-500">
            <span className="font-semibold text-gray-700">
              Popular Searches:
            </span>{" "}
            HTML, Java, JavaScript, PHP, SAP, test, WordPress
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-blue-600 text-xl font-bold">12K+</div>
              <div className="text-gray-500 text-sm">Companies Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-xl font-bold">98+</div>
              <div className="text-gray-500 text-sm">Job For Countries</div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-xl font-bold">3K+</div>
              <div className="text-gray-500 text-sm">Jobs Done</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
