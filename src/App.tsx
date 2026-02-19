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
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <DetailedServicesSection />
      <MethodologySection />
      <OfferSection />
      <Footer />
    </div>
  );
}

export default App;
