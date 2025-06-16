import { FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const ContactForm = () => {
  return (
    <main className="bg-gray-50">
      <div className="py-12 px-4 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="p-8 col-span-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="space-y-6 col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Los Angeles, CA 90026
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="tel:+19002344241"
                        className="hover:text-blue-600"
                      >
                        +1 (900) 234-4241
                      </a>
                      <br />
                      <a
                        href="tel:+19002343219"
                        className="hover:text-blue-600"
                      >
                        +1 (900) 234-3219
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <IoIosMail className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      Email Addresses
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="mailto:info@example.com"
                        className="hover:text-blue-600"
                      >
                        info@example.com
                      </a>
                      <br />
                      <a
                        href="mailto:services@example.com"
                        className="hover:text-blue-600"
                      >
                        services@example.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div
          id="map"
          className="mt-12 w-full h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.264311396457!2d90.40614005103322!3d23.780661208392793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ebfc24eab%3A0xea7dab563f12457a!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1750058179018!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            title="Our Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </main>
  );
};
