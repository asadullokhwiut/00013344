import graduatesImg from "../assets/graduates.jpg";

const HeroSection = () => {
    return (
      <section id="hero"
  className="w-full text-white bg-gradient-to-br from-[#2D0B5A] via-[#5F1B96] to-[#D12EBD] py-20 min-h-[70vh] flex items-center relative overflow-hidden">
        {/* (AWAITING) Optional wave background */}
        <div className="absolute inset-0">
          <img
            src="/wave.svg" // awaiting
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Right Decision <br /> Starts With Us!
            </h1>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-6 py-3 rounded-md font-medium">
              Try EduMatch →
            </button>
          </div>
  
          {/* Right Image */}
          <div className="flex-1">
            <img
              src={graduatesImg}
              alt="Graduates"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
    