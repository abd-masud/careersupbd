"use client";

import Slider from "react-slick";
import Image from "next/image";
import quote from "../../../public/images/quote-dark.png";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Clients = () => {
  const testimonials = [
    {
      name: "Nicole Wells",
      role: "Web Developer",
      image: "/images/testimonial1.png",
      quote:
        "Without Jobs I'd be homeless, they found me a job and got me sorted out.",
    },
    {
      name: "Brooklyn Simmons",
      role: "Consultant",
      image: "/images/testimonial2.png",
      quote:
        "Without Jobs I'd be homeless, they found me a job and got me sorted out.",
    },
  ];

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="py-8 px-4 max-w-screen-xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-[#1967D2] font-bold text-3xl">
          Clients Testimonials
        </p>
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
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-blue-50 rounded-lg px-5">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={200}
                height={200}
                className="h-80 w-auto px-5 pt-7"
              />
              <div className="text-left max-w-lg md:pb-0 pb-5">
                <Image className="h-10 w-auto mb-4" src={quote} alt="Quote" />
                <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
                <p className="font-bold text-blue-700">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-4 gap-4">
        <button
          className="w-10 h-10 text-[24px] flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-[#131226] transition duration-300"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          className="w-10 h-10 text-[24px] flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-[#131226] transition duration-300"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </main>
  );
};
