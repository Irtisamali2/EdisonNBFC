import PageHeader from '../components/layout/PageHeader.jsx';
import CTASection from '../components/layout/CTASection.jsx';
import StrategicPositioning from '../components/sections/StrategicPositioning.jsx';
import Strategy from '../components/sections/Strategy.jsx';

export default function StrategyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our strategy"
        title="A phased path from district pilots to nationwide scale."
        lede="Strategic positioning, growth phases, and the objectives that shape how we lend and where."
      />
      <StrategicPositioning />
      <Strategy noHead />
      <CTASection />
    </>
  );
}
