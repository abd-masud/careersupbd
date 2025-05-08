"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Header = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const images = [
    "/images/home1.webp",
    "/images/home2.webp",
    "/images/home3.webp",
  ];

  return (
    <main className="bg-[#F3F8FD]">
      <section className="max-w-screen-xl mx-auto px-4 py-5 md:py-20 grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10 items-center">
        {/* Image Slider */}
        <div className="rounded-xl shadow-lg relative z-10 order-2 md:order-1">
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                  priority={index == 0}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Your Career Here!
          </h1>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            Empowering Your Career Journey with Expert Guidance and Professional
            Tools. Explore our services and take the next step towards achieving
            your dream career!
          </p>

          {/* Search Form */}
          <div className="bg-white shadow-md rounded-xl p-4 mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <select className="flex-1 border px-3 py-2 rounded-lg text-gray-600 text-sm sm:text-base">
              <option>What</option>
            </select>
            <select className="flex-1 border px-3 py-2 rounded-lg text-gray-600 text-sm sm:text-base">
              <option>Category</option>
            </select>
            <select className="flex-1 border px-3 py-2 rounded-lg text-gray-600 text-sm sm:text-base">
              <option>Regions</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base">
              Find&nbsp;Jobs
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            <span className="font-semibold text-gray-700">
              Popular Searches:
            </span>{" "}
            HTML, Java, JavaScript, PHP, SAP, test, WordPress
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-blue-600 text-lg sm:text-xl md:text-2xl font-bold">
                12K+
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Companies Jobs
              </div>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-lg sm:text-xl md:text-2xl font-bold">
                98+
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Job For Countries
              </div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 text-lg sm:text-xl md:text-2xl font-bold">
                3K+
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">Jobs Done</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
