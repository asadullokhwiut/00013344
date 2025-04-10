import comparisonImg from "../assets/comparison.png";

const ComparisonToolSection = () => {
    return (
      <section id="comparison" className="w-full bg-white py-20 min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Optional background pattern */}
        <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
          <img
            src="/pattern.svg" // awaiting
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Comparison Tool
            </h2>
            <p className="text-gray-700 mb-6">
              <span className="text-yellow-500 font-medium">
                Images, videos, PDFs and audio files are supported.
              </span>{" "}
              Create math expressions and diagrams directly from the app. Take
              photos with the mobile app and save them to a note.
            </p>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-6 py-3 rounded-md font-medium">
              Get Started →
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <img
              src={comparisonImg}
              alt="Comparison"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ComparisonToolSection;
  