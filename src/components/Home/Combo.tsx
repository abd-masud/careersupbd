import React from "react";

type ComboPlan = {
  title: string;
  experience: string;
  price: string;
  save: string;
  features: string[];
  total: string;
};

const combos: ComboPlan[] = [
  {
    title: "Fresher’s",
    experience: "0 to 2 years Experience",
    price: "৳ 11,000",
    save: "Save 2,500!",
    features: [
      "CV Writing: 2000",
      "Cover Letter: 1000",
      "LinkedIn Profile Optimization: 2000",
      "bdJobs Profile Update: 1000",
      "Video Resume Script: 1500",
      "Career Counseling Session: 3000",
      "Job Interview Preparation: 3000",
    ],
    total: "13,500",
  },
  {
    title: "Mid-Level",
    experience: "3-8 years of experience",
    price: "৳ 17,000",
    save: "Save 3,000!",
    features: [
      "CV Writing: 3000",
      "Cover Letter: 1500",
      "LinkedIn Profile Optimization: 2500",
      "bdJobs Profile Update: 1500",
      "Video Resume Script: 1500",
      "Career Counseling Session: 5000",
      "Job Interview Preparation: 5000",
    ],
    total: "20,000",
  },
  {
    title: "Senior Mid-Level",
    experience: "8-15 years of experience",
    price: "৳ 19,000",
    save: "Save 4,501!",
    features: [
      "CV Writing: 4500",
      "Cover Letter: 1500",
      "LinkedIn Profile Optimization: 2500",
      "bdJobs Profile Update: 1500",
      "Video Resume Script: 2500",
      "Career Counseling Session: 6000",
      "Job Interview Preparation: 6000",
    ],
    total: "24,500",
  },
  {
    title: "Senior Level",
    experience: "15+ years of experience",
    price: "৳ 29,999",
    save: "Save 6,001!",
    features: [
      "CV Writing: 6000",
      "Cover Letter: 2000",
      "LinkedIn Profile Optimization: 3000",
      "bdJobs Profile Update: 2000",
      "Video Resume Script: 3000",
      "Career Counseling Session: 10,000",
      "Job Interview Preparation: 10,000",
    ],
    total: "36,000",
  },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          {combos.map((combo, index) => (
            <div
              key={index}
              className="bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-center">
                  {combo.title}
                </h3>
                <p className="text-sm text-center mt-1">{combo.experience}</p>
                <hr className="my-4 border-blue-300" />
                <div className="text-center text-2xl font-bold mb-2">
                  {combo.price}
                </div>
                <p className="text-center text-sm text-green-400 font-semibold">
                  {combo.save}
                </p>
                <ul className="mt-4 space-y-1 text-sm">
                  {combo.features.map((feature, i) => (
                    <li key={i} className="leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-semibold text-sm">
                  Total Value: {combo.total}
                </p>
              </div>
              <button className="mt-6 w-full bg-white text-black font-bold py-2 rounded-full hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
