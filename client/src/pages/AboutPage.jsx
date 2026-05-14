import PageHeader from '../components/layout/PageHeader.jsx';
import CTASection from '../components/layout/CTASection.jsx';
import About from '../components/sections/About.jsx';
import HybridModel from '../components/sections/HybridModel.jsx';
import RegulatoryStatus from '../components/sections/RegulatoryStatus.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Edison Finance"
        title="A microfinance NBFC built for the entrepreneurs who power Pakistan."
        lede="Incorporated on 14 January 2026 under the Companies Act, 2017. Registered with the Securities and Exchange Commission of Pakistan."
      />
      <About noHead />
      <HybridModel />
      <RegulatoryStatus />
      <CTASection />
    </>
  );
}
