import { FaPhone } from "react-icons/fa";
import { IoIosMail, IoIosPin } from "react-icons/io";

export const ContactForm = () => {
  return (
    <main className="bg-gradient-to-b from-[#008CD1] to-[#2BAEC4]">
      <div className="px-4 max-w-screen-xl mx-auto grid grid-cols-2 gap-5">
        <div className="px-5 py-10">
          <h1 className="text-white text-[32px]">
            Contact TalentBridge Bangladesh Today
          </h1>
          <p>
            We work closely with Job Boards and Industry Experts to ensure we
            remain ahead of the competitive job market.
          </p>
          <div className="flex items-center gap-3">
            <IoIosPin className="fill-white" />
            <p className="text-white text-[12px]">Dhaka, Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="fill-white" />
            <p className="text-white text-[12px]">01677-563327</p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosMail className="fill-white" />
            <p className="text-white text-[12px]">talentbridge@gmail.com</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-40 bg-[#2563EB]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-5 py-10">
          <h2 className="font-bold">Send us a Message</h2>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="name">Phone Number:</label>
            <input
              className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="name">Career Level:</label>
            <input
              className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="name">Upload Your CV:</label>
            <input
              className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
              type="file"
            />
          </div>
          <div>
            <label htmlFor="name">Your Message (Optional):</label>
            <textarea className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2" />
          </div>
          <input type="submit" value="Send" />
        </div>
      </div>
    </main>
  );
};
