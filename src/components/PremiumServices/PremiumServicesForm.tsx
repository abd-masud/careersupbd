export const PremiumServicesForm = () => {
  return (
    <main>
      <div className="flex flex-col gap-5 px-5 py-10">
        <h2 className="font-bold">Send us a Message</h2>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="name">Phone Number:</label>
          <input
            className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="name">Career Level:</label>
          <input
            className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="name">Upload Your CV:</label>
          <input
            className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2"
            type="file"
          />
        </div>
        <div>
          <label htmlFor="name">Your Message (Optional):</label>
          <textarea className="border text-[14px] py-3 px-[10px] w-full bg-[#F2F4F7] hover:border-[#B9C1CC] focus:outline-none focus:border-[#B9C1CC] rounded-md transition-all duration-300 mt-2" />
        </div>
        <input type="submit" value="Send" />
      </div>
    </main>
  );
};
