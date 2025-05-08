import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

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
            <Image className="h-10 w-auto mb-3" src={logo} alt={"Logo"}></Image>
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
              <li>› Candidates List</li>
              <li>› Candidates Grid</li>
              <li>› Candidate Detail</li>
              <li>› Blog</li>
              <li>› Blog Grid–2</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li>› Employers List</li>
              <li>› Employers Grid</li>
              <li>› Employers Detail</li>
              <li>› Blog List</li>
              <li>› Blog Grid</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Helpful Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>› About Us</li>
              <li>› FAQ</li>
              <li>› Contact Us</li>
              <li>› Coming Soon</li>
              <li>› Under Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            Copyright © 2024 <span className="text-blue-400">DexignZone</span>.
            All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
