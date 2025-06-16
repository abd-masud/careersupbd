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
    name: "SHOHAG FARDIN",
    experience: "5 Years of experience",
    fee: "5000 BDT",
    title: "Counsellor",
    imageUrl: "/images/member1.jpg",
  },
  {
    name: "S.M. ARIFUZZAMAN",
    experience: "21 Years of experience",
    fee: "15,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/member2.jpg",
  },
  {
    name: "MASHAHED HASSAN",
    experience: "8 Years of experience",
    fee: "8000 BDT",
    title: "Counsellor",
    imageUrl: "/images/member3.jpg",
  },
  {
    name: "KAZI RAKIBUDDIN",
    experience: "35 Years of experience",
    fee: "20,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/member4.jpg",
  },
  {
    name: "AJAY KUMAR DAS",
    experience: "32 Years of experience",
    fee: "10,000 BDT",
    title: "Senior Counsellor",
    imageUrl: "/images/member5.jpg",
  },
];

export const ServicesList = () => {
  return (
    <main className="px-4 py-10 max-w-screen-xl mx-auto">
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">Sales & Marketing</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">HR & Admin</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">Banking</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">
            Accounts & Finance
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">RMG</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">Engineering</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="mb-20">
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">
            Supply & Chain Management
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div>
        <div className="text-center mb-8">
          <p className="text-[#1967D2] font-bold text-3xl">NGO</p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
