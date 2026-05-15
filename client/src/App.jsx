import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Announcement from './components/layout/Announcement.jsx';
import TopNav from './components/layout/TopNav.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import StrategyPage from './pages/StrategyPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ImpactPage from './pages/ImpactPage.jsx';
import ApplyPage from './pages/ApplyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Announcement />
      <TopNav activePath={pathname} />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
