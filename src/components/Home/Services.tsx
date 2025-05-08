import Link from "next/link";
import icon1 from "../../../public/icons/icon1.webp";
import icon2 from "../../../public/icons/icon2.webp";
import icon3 from "../../../public/icons/icon3.webp";
import Image from "next/image";

export const Services = () => {
  return (
    <main className="py-20 px-4 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#1967D2] font-bold text-3xl">
          Discover Our Services
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
          We are a professional career growth company helping individuals
          succeed at every stage of their journey. Our services include career
          counseling, job interview preparation, CV writing, LinkedIn
          optimization, and corporate training. With expert guidance and
          tailored solutions, we help you unlock your potential and achieve your
          dream career.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl relative text-center">
          <span
            className="absolute -top-9 right-20 text-white text-6xl font-extrabold"
            style={{
              WebkitTextStroke: "1px #3B82F6",
              color: "white",
            }}
          >
            1
          </span>

          <div className="absolute -top-6 left-1/4 bg-white p-4 rounded-xl shadow shadow-gray-500">
            <Image
              width={200}
              height={200}
              src={icon1.src}
              alt="icon1"
              className="w-10 h-10"
            />
          </div>
          <div className="mt-10 mb-5">
            <h3 className="text-2xl font-bold">CV Writing</h3>
            <p className="mt-2 text-sm">
              Customized CV for more interview calls
            </p>
          </div>
          <Link
            className="bg-white hover:bg-gray-100 px-5 py-2 rounded-md text-black text-sm font-semibold transition duration-200"
            href={"/"}
          >
            Order Now
          </Link>
        </div>
        <div className="bg-purple-400 text-white p-6 rounded-xl relative text-center">
          <span
            className="absolute -top-9 right-20 text-white text-6xl font-extrabold"
            style={{
              WebkitTextStroke: "1px #C084FC",
              color: "white",
            }}
          >
            2
          </span>

          <div className="absolute -top-6 left-1/4 bg-white p-4 rounded-xl shadow shadow-gray-500">
            <Image
              width={200}
              height={200}
              src={icon2.src}
              alt="icon2"
              className="w-10 h-10"
            />
          </div>
          <div className="mt-10 mb-5">
            <h3 className="text-2xl font-bold">Career Counselling</h3>
            <p className="mt-2 text-sm">Expert advice to shape your future.</p>
          </div>
          <Link
            className="bg-white hover:bg-gray-100 px-5 py-2 rounded-md text-black text-sm font-semibold transition duration-200"
            href={"/"}
          >
            Choose Mentor
          </Link>
        </div>
        <div className="bg-teal-400 text-white p-6 rounded-xl relative text-center">
          <span
            className="absolute -top-9 right-20 text-white text-6xl font-extrabold"
            style={{
              WebkitTextStroke: "1px #2DD4BF",
              color: "white",
            }}
          >
            3
          </span>

          <div className="absolute -top-6 left-1/4 bg-white p-4 rounded-xl shadow shadow-gray-500">
            <Image
              width={200}
              height={200}
              src={icon3.src}
              alt="icon3"
              className="w-10 h-10"
            />
          </div>
          <div className="mt-10 mb-5">
            <h3 className="text-2xl font-bold">Job Interview</h3>
            <p className="mt-2 text-sm">
              Build confidence & ace your interviews.
            </p>
          </div>
          <Link
            className="bg-white hover:bg-gray-100 px-5 py-2 rounded-md text-black text-sm font-semibold transition duration-200"
            href={"/"}
          >
            Prepare Now
          </Link>
        </div>
      </div>
    </main>
  );
};
