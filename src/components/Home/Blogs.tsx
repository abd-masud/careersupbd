"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const blogArticles = [
  {
    date: "July 25, 2022",
    author: "Rosalina William",
    title: "How to convince recruiters and get your dream",
    description:
      "Please make sure you understand what rights you are claiming before you submit a DMCA takedown notice because it is.",
    image: "/images/blog1.webp",
  },
  {
    date: "July 25, 2022",
    author: "Rosalina William",
    title: "5 things to know about the March 2022",
    description:
      "Please make sure you understand what rights you are claiming before you submit a DMCA takedown notice because it is.",
    image: "/images/blog2.webp",
  },
  {
    date: "July 25, 2022",
    author: "Rosalina William",
    title: "Job Board is the most important sector in",
    description:
      "Please make sure you understand what rights you are claiming before you submit a DMCA takedown notice because it is.",
    image: "/images/blog3.webp",
  },
];

export const Blogs = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <main className="bg-[#F3F8FD]">
      <div className="py-12 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">Latest Articles</p>
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-40 bg-[#2563EB]"></div>
            </div>
          </div>
          <h2 className="mt-4 px-4">
            Ever find yourself staring at your computer screen a good consulting
            slogan to come to mind? Oftentimes.
          </h2>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {blogArticles.map((article, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
                    <span className="bg-[#7A98BF] text-white px-2 py-1 rounded text-xs">
                      {article.date}
                    </span>
                    <span>By</span>
                    <span className="text-blue-600 font-semibold">
                      {article.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 truncate">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  <a
                    href="#"
                    className="text-blue-700 font-medium text-sm hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-10 h-10 text-[24px] flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-[#131226] transition duration-300"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-10 h-10 text-[24px] flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-[#131226] transition duration-300"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
    </main>
  );
};
