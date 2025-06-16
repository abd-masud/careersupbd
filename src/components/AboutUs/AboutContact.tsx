import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export const AboutContact = () => {
  return (
    <main className="md:py-20 py-10 px-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Get In Touch Today
          </h2>

          <div className="mb-4">
            <p className="font-bold">Location:</p>
            <p>
              685/1, 4th floor, beside Malibag Community Center, Dhaka, Dhaka,
              Bangladesh
            </p>
          </div>

          <div className="mb-4">
            <p className="font-bold">Email:</p>
            <p>careersupbd@gmail.com</p>
          </div>

          <div className="mb-4">
            <p className="font-bold">Phone:</p>
            <p>01677-563327</p>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaFacebookF className="text-blue-600" />
            </div>
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaTwitter className="text-sky-400" />
            </div>
            <div className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaGooglePlusG className="text-red-500" />
            </div>
          </div>
        </div>

        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4">
            Your companion for success. Our career documents will not just stand
            apart but give you the confidence you are looking for.
          </p>
          <p className="mb-4">
            We are a geographically dispersed team of 10+ Marketers,
            Copywriters, and Human Resource Specialists focused on making the
            best, not the most.
          </p>
          <p>
            We work closely with Job Boards and Industry Experts to ensure we
            remain ahead of the competitive job market.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
          WRITE TO US <FaEnvelope />
        </button>
        <button className="bg-white border border-gray-300 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
          PHONE TO US <FaPhone />
        </button>
      </div>
    </main>
  );
};
