import PageHeader from '../components/layout/PageHeader.jsx';
import CTASection from '../components/layout/CTASection.jsx';
import Impact from '../components/sections/Impact.jsx';
import FederalPilot from '../components/sections/FederalPilot.jsx';

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="Driving economic empowerment — measured in livelihoods."
        lede="What we aim to do, where our capital lands first, and how the Federal Government pilot fits in."
      />
      <Impact noHead />
      <FederalPilot />
      <CTASection />
    </>
  );
}
