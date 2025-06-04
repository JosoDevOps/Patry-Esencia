// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Celestial background effects */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        {/* Animated stars */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite alternate`
            }}
          />
        ))}
        
        {/* Subtle light rays */}
        <div className="absolute top-0 left-1/4 w-1/2 h-screen bg-gradient-to-b from-[#b08bc8]/10 to-transparent transform -rotate-45"></div>
        <div className="absolute top-0 right-1/4 w-1/2 h-screen bg-gradient-to-b from-[#6c3483]/10 to-transparent transform rotate-45"></div>
      </div>
      
      <Navigation />
      <section id="home" className="pt-16"> {/* Added padding-top to fix navbar overlap */}
        <Header />
      </section>
      <section id="services" className="py-16 px-4 md:px-12 bg-white">
        <Services />
      </section>
      <section id="about" className="py-16 px-4 md:px-12 bg-[#f5f3f7]">
        <About />
      </section>
      <section id="testimonials" className="py-16 px-4 md:px-12 bg-white">
        <Testimonials />
      </section>
      <section id="contact" className="py-16 px-4 md:px-12 bg-[#f5f3f7]">
        <Contact />
      </section>
      <Footer />
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#6c3483] text-white shadow-lg hover:bg-[#4a235a] transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;