import { useEffect, useState } from 'react';
import { NavBar } from './components/landing/NavBar';
import { Hero } from './components/landing/Hero';
import { SocialProof } from './components/landing/SocialProof';
import { Programs } from './components/landing/Programs';
import { ClassSchedule } from './components/landing/ClassSchedule';
import { Coaches } from './components/landing/Coaches';
import { Testimonials } from './components/landing/Testimonials';
import { Pricing } from './components/landing/Pricing';
import { ContactSection } from './components/landing/ContactSection';
import { CTASection } from './components/landing/CTASection';
import { Footer } from './components/landing/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 relative">
      <NavBar />
      <Hero />
      <SocialProof />
      <Programs />
      <ClassSchedule />
      <Coaches />
      <Testimonials />
      <Pricing />
      <ContactSection />
      <CTASection />
      <Footer />

      {/* Sticky Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-primary hover:bg-red-700 text-primary-foreground rounded-full shadow-[0_0_20px_rgba(211,47,47,0.5)] transition-all transform duration-300 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          } hover:scale-110`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
