import logo from "../assets/logo.png";
const Footer = () => {
    return (
      <footer className="bg-white text-gray-800 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo */}
          <div className="col-span-1">
          <div className="flex items-center gap-2 bg-[#5F1B96] px-3 py-2 rounded-md w-fit">
            <img src={logo} alt="EduMatch Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-white">EduMatch</span>
          </div>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li className="text-yellow-500">Pricing</li>
              <li>Compare</li>
              <li>Personal Recommendation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Guides & tutorials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About us</li>
            </ul>
          </div>
  
          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Try It Today</h4>
            <button className="bg-[#5F1B96] hover:bg-[#4A177A] transition text-white px-5 py-2 rounded-md font-medium">
              Start today →
            </button>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t text-sm py-4 px-4 text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            🌐 English
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">
              Terms & privacy
            </a>
            <span>©2025 EduMatch LLC.</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  