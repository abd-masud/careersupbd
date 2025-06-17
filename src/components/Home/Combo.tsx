export const Combo = () => {
  return (
    <main className="py-10 bg-[#F3F8FD]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">
            Career Success Combo
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
            Select the mentor who aligns with your career goals and start your
            journey toward success today!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              id: "fresher",
              title: "Fresher's Package",
              price: "৳1,000",
              features: [
                "1-Page Cover Letter",
                "Basic Formatting",
                "Entry-Level Optimization",
              ],
            },
            {
              id: "mid",
              title: "Mid-Level",
              price: "৳1,500",
              features: [
                "2-Page Cover Letter",
                "ATS Optimization",
                "Industry-Specific Keywords",
              ],
              popular: false,
            },
            {
              id: "senior-mid",
              title: "Senior Mid-Level",
              price: "৳1,500",
              features: [
                "Executive Summary",
                "Leadership Highlight",
                "2 Revisions",
              ],
              popular: true,
            },
            {
              id: "senior",
              title: "Senior Level",
              price: "৳2,000",
              features: [
                "3-Page Cover Letter",
                "C-Level Formatting",
                "Unlimited Revisions",
              ],
            },
          ].map((pkg) => (
            <div
              key={pkg.id}
              className={`relative border rounded-xl p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 bg-white ${
                pkg.popular
                  ? "ring-2 ring-blue-500 border-blue-500"
                  : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {pkg.title}
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                {pkg.price}
              </p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-md font-medium ${
                  pkg.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
