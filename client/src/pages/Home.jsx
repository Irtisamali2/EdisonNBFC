import Hero from '../components/sections/Hero.jsx';
import HighlightStrip from '../components/sections/HighlightStrip.jsx';
import AboutSnapshot from '../components/sections/AboutSnapshot.jsx';
import ProductsPreview from '../components/sections/ProductsPreview.jsx';
import FederalPilot from '../components/sections/FederalPilot.jsx';
import ImpactPreview from '../components/sections/ImpactPreview.jsx';
import CTASection from '../components/layout/CTASection.jsx';

export default function Home() {
  return (
    <>
      <Hero variant="coin" />
      <HighlightStrip />
      <AboutSnapshot />
      <ProductsPreview />
      <FederalPilot />
      <ImpactPreview />
      <CTASection />
    </>
  );
}
