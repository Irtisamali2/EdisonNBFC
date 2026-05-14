import PageHeader from '../components/layout/PageHeader.jsx';
import Contact from '../components/sections/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our team."
        lede="Partnerships, media, careers, and capital — we respond within two working days."
      />
      <Contact noHead />
    </>
  );
}
