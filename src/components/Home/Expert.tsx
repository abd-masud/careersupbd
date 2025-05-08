import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    title: "Public Speaker",
    image: "/images/member1.jpg",
  },
  {
    name: "Samia Rahman",
    title: "Admin Manager",
    image: "/images/member2.jpg",
  },
  {
    name: "Nashira Akter",
    title: "Designer",
    image: "/images/member3.jpg",
  },
  {
    name: "Rima Sultana",
    title: "Developer",
    image: "/images/member4.jpg",
  },
  {
    name: "Saif Khan",
    title: "Photographer",
    image: "/images/member5.jpg",
  },
  {
    name: "Alex Ray",
    title: "Support Lead",
    image: "/images/member6.jpg",
  },
];

export const Expert = () => {
  return (
    <main className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-[#1967D2] font-bold text-3xl">Expert Team</p>
        <div className="flex items-center justify-center mt-2">
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 bg-[#2563EB]"></div>
            <div className="h-1 w-1 bg-[#2563EB]"></div>
            <div className="h-1 w-1 bg-[#2563EB]"></div>
            <div className="h-1 w-40 bg-[#2563EB]"></div>
          </div>
        </div>
        <p className="mt-4 px-4">
          Ever find yourself staring at your computer screen a good consulting
          slogan to come to mind? Oftentimes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm">{member.title}</p>
              <div className="flex gap-4 mt-4">
                <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                <FaTwitter className="hover:text-blue-300 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-200 cursor-pointer" />
                <FaYoutube className="hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
