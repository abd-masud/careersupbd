export const Success = () => {
  return (
    <main className="py-12 px-4 max-w-screen-xl mx-auto bg-white text-center">
      <div className="text-center mb-8">
        <p className="text-[#1967D2] font-bold text-3xl">Our Success Story</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start">
        {/* First Video */}
        <div className="border border-[#2563EB] rounded-md overflow-hidden">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/VIDEO_ID_1"
            title="Success Story 1"
            allowFullScreen
          ></iframe>
          <p className="mt-4 text-left px-4 pb-4 text-sm font-semibold text-gray-700">
            &quot;Careers Up BD created a CV for me that allows anyone to
            understand my entire career story within just 10–15 seconds.&quot;
            <br />–{" "}
            <span className="text-black font-bold">
              Faruk Hossain. DGM, Al-Madina Group
            </span>
          </p>
        </div>

        {/* Second Video */}
        <div className="border border-[#2563EB] rounded-md overflow-hidden">
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/VIDEO_ID_2"
            title="Success Story 2"
            allowFullScreen
          ></iframe>
          <p className="mt-4 text-left px-4 pb-4 text-sm font-semibold text-gray-700">
            After participating in the interview preparation session, I landed
            my dream job!
            <span className="text-black font-bold"> Highly recommended!</span>
            <br />–{" "}
            <span className="text-black font-bold">
              Shamin Sarkar. Factory Manager, Art&apos;Sign
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
