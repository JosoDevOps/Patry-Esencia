// src/components/Navigation.jsx
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === '#') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        const navHeight = 80; // Approximate height of the navigation bar
        const sectionTop = section.offsetTop - navHeight;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Mi', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#f5f3f7]/95 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')}
            className="text-[#6c3483] font-serif text-2xl"
          >
            Patry
          </a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#2c3e50] hover:text-[#6c3483] transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#6c3483] hover:text-[#4a235a] transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
          <div className="py-4 bg-[#f5f3f7]/95 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-2 text-[#2c3e50] hover:text-[#6c3483] transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;