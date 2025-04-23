import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ComparisonToolSection from "./components/ComparisonToolSection";
import LatestInformationSection from "./components/LatestInformationSection";
import PartnershipSection from "./components/PartnershipSection";
import IntegrationSection from "./components/IntegrationSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ComparisonPage from "./pages/Universities";
import RecommendationPage from "./pages/Recommendation";
import PartnershipPage from "./pages/Partnership";
import Profile from './pages/Profile';
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ComparisonToolSection />
              <LatestInformationSection />
              <PartnershipSection />
              <IntegrationSection />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/universities" element={<ComparisonPage />} />
        <Route path="/recommendation" element={<RecommendationPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
