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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        const navHeight = 80;
        const sectionTop = section.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
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
      isScrolled ? 'bg-misty/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')}
            className="text-accent font-serif text-2xl"
          >
            Patry Esencia
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-dark hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent hover:text-accent/80 transition-colors duration-300"
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
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" /> // Icono de cerrar
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" /> // Icono de menú
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}>
          <div className="py-4 bg-misty/95 backdrop-blur-md space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-2 text-dark hover:text-accent transition-colors duration-300 font-medium"
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
