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
    imageUrl: "/images/oron.jpg",
  },
  {
    name: "PROF. S.M. ARIFUZZAMAN",
    experience: "21 Years of experience",
    fee: "15,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/arifuzzaman.jpg",
  },
  {
    name: "MASHAHED HASSAN (SIMANTA)",
    experience: "8 Years of experience",
    fee: "8000 BDT",
    title: "Counsellor",
    imageUrl: "/images/simanta.jpg",
  },
  {
    name: "KAZI RAKIBUDDIN AHMED",
    experience: "35 Years of experience",
    fee: "20,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/kazi.jpg",
  },
  {
    name: "AJAY KUMAR DAS",
    experience: "32 Years of experience",
    fee: "10,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/ajay.jpg",
  },
];

export const Counseling = () => {
  return (
    <main className="px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Career Counselling
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Select the mentor who aligns with your career goals and start your
        journey toward success today!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-xl mx-auto px-4">
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
            <button className="mt-3 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
