import Image from "next/image";

type Counselor = {
  name: string;
  experience: string;
  fee: string;
  title: string;
  imageUrl: string;
};

const counselors: Counselor[] = [
  {
    name: "SHOHAG FARDIN ORON",
    experience: "5 Years of experience",
    fee: "5000 BDT",
    title: "Counsellor",
    imageUrl: "/images/member1.jpg",
  },
  {
    name: "PROF. S.M. ARIFUZZAMAN",
    experience: "21 Years of experience",
    fee: "15,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/member2.jpg",
  },
  {
    name: "MASHAHED HASSAN (SIMANTA)",
    experience: "8 Years of experience",
    fee: "8000 BDT",
    title: "Counsellor",
    imageUrl: "/images/member3.jpg",
  },
  {
    name: "KAZI RAKIBUDDIN AHMED",
    experience: "35 Years of experience",
    fee: "20,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/member4.jpg",
  },
];

export const Preparation = () => {
  return (
    <main className="bg-[#F3F8FD]">
      <div className="px-4 py-10 max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">
            Job Interview Preparation
          </p>
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-1 bg-[#2563EB]"></div>
              <div className="h-1 w-40 bg-[#2563EB]"></div>
            </div>
          </div>
          <p className="mt-4 px-4">
            Select the mentor who aligns with your career goals and start your
            journey toward success today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
          {counselors.map((counselor, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"
            >
              <Image
                width={200}
                height={200}
                src={counselor.imageUrl}
                alt={counselor.name}
                className="w-full h-56 object-cover rounded"
              />
              <h3 className="mt-4 font-bold text-center">{counselor.name}</h3>
              <p className="text-sm text-center">{counselor.experience}</p>
              <p className="text-sm text-center text-gray-600">
                {counselor.title}
              </p>
              <p className="text-sm text-center mt-1">
                Hourly Fee: {counselor.fee}
              </p>
              <button className="text-green-600 mt-1 text-sm hover:underline">
                See Details
              </button>
              <button className="mt-3 bg-[#2563EB] text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
