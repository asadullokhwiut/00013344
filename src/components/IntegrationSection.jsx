import integrationGraphic from "../assets/integration-graphic.png";

const IntegrationSection = () => {
    return (
      <section id="integration" className="w-full text-white bg-gradient-to-br from-[#2D0B5A] via-[#5F1B96] to-[#D12EBD] py-20 min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Background wave pattern */}
        <div className="absolute inset-0">
          <img
            src="/wave.svg" // optional wave SVG background
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: App Icons Cluster */}
          <div className="flex-1 flex justify-center">
            <img
              src={integrationGraphic}
              alt="App integrations"
              className="max-w-md"
            />
          </div>
  
          {/* Right Side: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              <span className="text-white font-bold">Abous Us</span>
            </h2>
            <p className="text-gray-200 mb-6">
              EduMatch is the newly developed platform focusing on univeristy
              selection progress making it easier with the help of latest technologies
              and various methods!
            </p>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-6 py-3 rounded-md font-medium">
              Read more →
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default IntegrationSection;
  