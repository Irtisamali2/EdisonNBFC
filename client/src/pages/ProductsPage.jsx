import PageHeader from '../components/layout/PageHeader.jsx';
import CTASection from '../components/layout/CTASection.jsx';
import Products from '../components/sections/Products.jsx';
import Funding from '../components/sections/Funding.jsx';
import Calculator from '../components/sections/Calculator.jsx';

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products & services"
        title="A complete financing toolkit — for the way Pakistan actually borrows."
        lede="Conventional and Shariah-compliant products across enterprise, agriculture, consumer, and digital segments."
      />
      <Products noHead />
      <Funding />
      <Calculator />
      <CTASection />
    </>
  );
}
