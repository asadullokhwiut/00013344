import latestInfoImg from "../assets/latest-info.png";

const LatestInformationSection = () => {
    return (
      <section id="latest-info" className="w-full text-white bg-gradient-to-br from-[#D12EBD] via-[#5F1B96] to-[#2D0B5A] py-20 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable{" "}
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 -z-10 rounded-sm" />
                Pricing
              </span>
            </h2>
            <p className="text-gray-200 mb-6">
              Among the education platforms, EduMatch is obviously one of 
              the cheapest and trustworthy platform.
              No reason to wait, just spend a LITTLE and get a LOT!
            </p>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-6 py-3 rounded-md font-medium">
              Purchase →
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <img
              src={latestInfoImg}
              alt="News Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default LatestInformationSection;
  