import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import SampleWork from './components/SampleWork.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import ProcessAndFAQ from './components/ProcessAndFAQ.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import { initSmoothScroll } from './motion.js';

export default function App() {
  useEffect(() => {
    const destroySmoothScroll = initSmoothScroll();

    // Fonts/images can shift layout after load — keep trigger positions true.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      destroySmoothScroll();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-bg-main">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <SampleWork />
        <Testimonials />
        <Pricing />
        <ProcessAndFAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
