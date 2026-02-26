import { AboutSection } from './components/AboutSection';
import { VideoSection } from './components/VideoSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { DetailedServicesSection } from './components/DetailedServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { OfferSection } from './components/OfferSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <VideoSection />
      <ServicesSection />
      <DetailedServicesSection />
      <MethodologySection />
      <OfferSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
