import PageHeader from '../components/layout/PageHeader.jsx';
import Calculator from '../components/sections/Calculator.jsx';
import CTASection from '../components/layout/CTASection.jsx';

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Loan calculator"
        title="See your repayment before you apply."
        lede="Adjust the amount, tenor, and product type to get an indicative monthly instalment. Final terms are confirmed at sanction."
      />
      <Calculator />
      <CTASection />
    </>
  );
}
