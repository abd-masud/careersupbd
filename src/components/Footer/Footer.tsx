import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-footer_bg bg-cover text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-10">
          <h2 className="text-lg font-medium text-center lg:text-left mb-4 lg:mb-0">
            Join our email subscription now to get updates on new jobs and
            notifications.
          </h2>
          <div className="flex w-full max-w-md lg:max-w-xl">
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="w-full px-4 py-5 rounded-l-md text-black"
            />
            <button className="bg-blue-600 px-6 py-5 rounded-r-md hover:bg-blue-700 font-bold transition-all">
              Subscribe&nbsp;Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <div>
            <div className="mb-3">
              <Link className="flex items-center" href={"/"}>
                <Image
                  height={1000}
                  width={1000}
                  src={logo}
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
            <p className="text-sm mb-2">
              Many desktop publishing packages and web page editors now.
            </p>
            <p>
              <strong>Address:</strong> 65 Sunset CA 90026, USA
            </p>
            <p>
              <strong>Email:</strong> example@domain.com
            </p>
            <p>
              <strong>Call:</strong> 555-555-1234
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">For Candidate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={""}>› Candidates List</Link>
              </li>
              <li>
                <Link href={""}>› Candidates Grid</Link>
              </li>
              <li>
                <Link href={""}>› Candidate Detail</Link>
              </li>
              <li>
                <Link href={""}>› Blog</Link>
              </li>
              <li>
                <Link href={""}>› Blog Grid–2</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={""}>› Employers List</Link>
              </li>
              <li>
                <Link href={""}>› Employers Grid</Link>
              </li>
              <li>
                <Link href={""}>› Employers Detail</Link>
              </li>
              <li>
                <Link href={""}>› Blog List</Link>
              </li>
              <li>
                <Link href={""}>› Blog Grid</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Helpful Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={""}>› About Us</Link>
              </li>
              <li>
                <Link href={""}>› FAQ</Link>
              </li>
              <li>
                <Link href={""}>› Contact Us</Link>
              </li>
              <li>
                <Link href={""}>› Coming Soon</Link>
              </li>
              <li>
                <Link href={""}>› Under Maintenance</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            Copyright © 2024 <span className="text-blue-400">DexignZone</span>.
            All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={""}>
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            </Link>
            <Link href={""}>
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </Link>
            <Link href={""}>
              <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            </Link>
            <Link href={""}>
              <FaInstagram className="hover:text-blue-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
