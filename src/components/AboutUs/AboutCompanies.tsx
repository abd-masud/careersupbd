"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";

export const AboutCompanies = () => {
  const companies = [
    {
      image: "/images/logo.png",
      alt: "company1",
    },
    {
      image: "/images/logo.png",
      alt: "company2",
    },
    {
      image: "/images/logo.png",
      alt: "company3",
    },
    {
      image: "/images/logo.png",
      alt: "company4",
    },
    {
      image: "/images/logo.png",
      alt: "company5",
    },
    {
      image: "/images/logo.png",
      alt: "company6",
    },
    {
      image: "/images/logo.png",
      alt: "company7",
    },
  ];

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="bg-[#F3F8FD]">
      <div className="py-12 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-[#1967D2] font-bold text-3xl">Top Companies</p>
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-40 bg-[#2563EB]"></div>
            </div>
          </div>
          <h2 className="mt-4 px-4">Get hired in top companies</h2>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="w-full px-2">
              <Image
                src={company.image}
                alt={company.alt}
                width={200}
                height={200}
                className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};
