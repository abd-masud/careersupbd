"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname == href ? "text-[#1967D2]" : "text-black";
  };

  return (
    <div className="shadow-lg bg-[#F5F6F7]">
      <div className="flex items-center justify-between sm:py-5 py-3 px-4 max-w-screen-2xl mx-auto">
        <div>
          <Link className="flex items-center" href={"/"}>
            <Image
              height={1000}
              width={1000}
              src={Logo}
              alt={"Logo"}
              className="h-10 w-10"
              priority
            />{" "}
            <div className="flex flex-col leading-4 items-center ml-1">
              <span className="font-bold text-[20px]">TalentBridge</span>
              <span className="text-[14px]">Bangladesh</span>
            </div>
          </Link>
        </div>

        <div className="hidden xl:flex xl:items-center xl:space-x-6 text-[#404A60] font-semibold">
          <Link
            className={`hover:text-[#1967D2] transition duration-300 ${isActive(
              "/cv-resume-writing"
            )}`}
            href={"/cv-resume-writing"}
          >
            CV/Resume Writing
          </Link>
          <Link
            className={`mx-5 hover:text-[#1967D2] transition duration-300 ${isActive(
              "/career-counselling"
            )}`}
            href={"/career-counselling"}
          >
            Career Counselling
          </Link>
          <Link
            className={`mx-5 hover:text-[#1967D2] transition duration-300 ${isActive(
              "/premium-services"
            )}`}
            href={"/premium-services"}
          >
            Premium Services
          </Link>
          <Link
            className={`mx-5 hover:text-[#1967D2] transition duration-300 ${isActive(
              "/contact"
            )}`}
            href={"/contact"}
          >
            Contact
          </Link>
          <Link
            className={`mx-5 hover:text-[#1967D2] transition duration-300 ${isActive(
              "/about-us"
            )}`}
            href={"/about-us"}
          >
            About Us
          </Link>
        </div>

        <div className="hidden xl:block">
          <div className="flex items-center gap-5">
            <div>
              <form className="flex gap-2 relative justify-end">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border p-2 pl-3 rounded-full outline-none w-[130px] sm:w-[180px] text-[12px]"
                />
                <button
                  type="submit"
                  className="absolute font-semibold bg-[#1967D2] rounded-full text-[12px] h-7 w-7 mt-1 mr-1 text-white hover:bg-[#0E0C25] hover:text-white transition-colors duration-300 flex items-center justify-center group"
                >
                  <IoSearch className="transition-transform duration-300 text-sm" />
                </button>
              </form>
            </div>
            <Link
              href={"/login"}
              className="font-semibold bg-[#1967D2] px-5 py-2 rounded-lg text-white hover:bg-[#131226] hover:text-white transition-colors duration-300 flex items-center group"
            >
              <>
                <span>Login</span>
                <FaArrowRight className="ml-1 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-sm" />
              </>
            </Link>
          </div>
        </div>

        <div className="xl:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#131226] text-2xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#F5F6F7] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-[#0E0C25] text-2xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col h-full py-4 px-6 text-[#404A60] font-semibold space-y-4">
          <Link
            className={`${
              isActive("/cv-resume-writing") == "text-[#1967D2]"
                ? "text-[#1967D2]"
                : "text-black"
            }`}
            href={"/cv-resume-writing"}
            onClick={() => setIsMenuOpen(false)}
          >
            CV/Resume Writing
          </Link>
          <Link
            className={`${
              isActive("/career-counselling") == "text-[#1967D2]"
                ? "text-[#1967D2]"
                : "text-black"
            }`}
            href={"/career-counselling"}
            onClick={() => setIsMenuOpen(false)}
          >
            Career Counselling
          </Link>
          <Link
            className={`${
              isActive("/premium-services") == "text-[#1967D2]"
                ? "text-[#1967D2]"
                : "text-black"
            }`}
            href={"/premium-services"}
            onClick={() => setIsMenuOpen(false)}
          >
            Premium Services
          </Link>
          <Link
            className={`${
              isActive("/contact") == "text-[#1967D2]"
                ? "text-[#1967D2]"
                : "text-black"
            }`}
            href={"/contact"}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            className={`${
              isActive("/about-us") == "text-[#1967D2]"
                ? "text-[#1967D2]"
                : "text-black"
            }`}
            href={"/about-us"}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <div>
            <form className="flex gap-2 relative justify-end">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 pl-3 rounded-full outline-none w-full text-[12px]"
              />
              <button
                type="submit"
                className="absolute font-semibold bg-[#1967D2] rounded-full text-[12px] h-7 w-7 mt-1 mr-1 text-white hover:bg-[#0E0C25] transition-colors duration-300 flex items-center justify-center group"
              >
                <IoSearch className="transition-transform duration-300 text-sm" />
              </button>
            </form>
          </div>
          <Link
            href={"/login"}
            className="font-semibold bg-[#1967D2] px-5 py-2 rounded-lg text-white hover:bg-[#131226] transition-colors duration-300 flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Login</span>
            <FaArrowRight className="ml-1 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-sm" />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};
