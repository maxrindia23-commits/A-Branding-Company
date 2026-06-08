import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HeroSection } from './components/sections/HeroSection';
import { About } from './components/sections/About';
import { WhySection } from './components/sections/WhySection';
import { MarketingWild } from './components/sections/MarketingWild';
import { WhyChooseABC } from './components/sections/WhyChooseABC';
import { HowWeBuildBrands } from './components/sections/HowWeBuildBrands';
import { Services } from './components/sections/Services';
import { Values } from './components/sections/Values';
import { Contact } from './components/sections/Contact';
import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-adz-bg text-adz-white">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <WhySection />
        <MarketingWild />
        <WhyChooseABC />
        <HowWeBuildBrands />
        <Services />
        <Values />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
