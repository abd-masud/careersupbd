export const PremiumServicesForm = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="hidden md:flex md:w-1/3 bg-gradient-to-b from-blue-600 to-indigo-700 p-8 flex-col justify-center">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">
                Premium Career Services
              </h3>
              <p className="text-blue-100 text-sm mb-6">
                Let our experts help you take the next step in your career
                journey.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50 text-sm">
                    Personalized career coaching
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50 text-sm">
                    Expert resume optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-50 text-sm">
                    Interview preparation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-2/3 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Get Started</h2>
              <p className="text-gray-500 mt-2">
                Complete the form to schedule your consultation
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                  >
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="career-level"
                    className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                  >
                    Career Level
                  </label>
                  <div className="relative">
                    <select
                      id="career-level"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      required
                    >
                      <option value="">Select your level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Career (3-7 years)</option>
                      <option value="senior">Senior Level (8+ years)</option>
                      <option value="executive">Executive</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="cv"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Upload CV/Resume
                </label>
                <div className="mt-1 flex rounded-xl border border-gray-200 overflow-hidden">
                  <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                    <span className="px-4 py-3 text-blue-600 font-medium flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      Choose File
                    </span>
                    <input
                      id="cv"
                      className="hidden"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </label>
                  <span className="px-4 py-3 bg-gray-50 text-gray-500 truncate flex-grow">
                    No file selected
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500 ml-1">
                  PDF, DOC, DOCX (Max. 5MB)
                </p>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Tell us about your career goals and how we can help..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                >
                  Request Consultation
                  <svg
                    className="w-4 h-4 ml-2 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      privacy policy
                    </a>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
