import partnershipImg from "../assets/partnership.jpg";

const PartnershipSection = () => {
    return (
      <section id="partnership" className="w-full bg-white py-20 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src={partnershipImg}
              alt="Partnership"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Partnership with{" "}
              <span className="relative inline-block">
                <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 -z-10 rounded-sm" />
                Universities
              </span>
            </h2>
            <p className="text-gray-700 mb-6">
              Find the up-to-date information and latest news of top
              universities of Uzbekistan. Since the development, EduMatch partnered with
              several top universities and still continues its progress! 
            </p>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-6 py-3 rounded-md font-medium">
              Let's Go →
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnershipSection;
  