import Link from "next/link";
import icon1 from "../../../public/icons/icon1.webp";
import icon2 from "../../../public/icons/icon2.webp";
import Image from "next/image";

export const AboutMissionVision = () => {
  return (
    <main className="md:py-20 py-10 px-4 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-xl relative text-center mb-5">
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
          <div className="my-10">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="mt-2 text-sm">
              To be the premier platform in Bangladesh that connects talent with
              opportunity, driving personal growth and contributing to national
              economic development.
            </p>
          </div>
          <Link
            className="bg-white hover:bg-gray-100 px-5 py-2 rounded-md text-black text-[12px] transition duration-200"
            href={"/about-us"}
          >
            Learn More
          </Link>
        </div>
        <div className="bg-purple-400 text-white p-6 rounded-xl relative text-center mb-5">
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
          <div className="my-10">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-2 text-sm">
              To equip individuals with industry-aligned skills, actionable
              career insights, and practical tools essential for success in
              today’s competitive job market.
            </p>
          </div>
          <Link
            className="bg-white hover:bg-gray-100 px-5 py-2 rounded-md text-black text-[12px] transition duration-200"
            href={"/about-us"}
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
};
