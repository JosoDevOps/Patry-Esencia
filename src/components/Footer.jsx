// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/patry_esencia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'fab fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61573873631675&rdid=58AC6y6xeIuRymyH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18WSBj3MQZ%2F#', icon: 'fab fa-facebook' },
    { name: 'YouTube', url: 'https://youtube.com/@patryesencia?si=VVyN1FxqGyV821ju', icon: 'fab fa-youtube' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@patryesencia?is_from_webapp=1&sender_device=pc', icon: 'fab fa-tiktok' },
    { name: 'WhatsApp', url: 'https://wa.me/34641931076', icon: 'fab fa-whatsapp' }
  ];
  
  const quickLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Mi', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <footer className="bg-[#2c3e50] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif mb-4">Patry</h3>
            <p className="text-gray-300 mb-4">
              Conectando con lo invisible, traduciendo mensajes del más allá para tu crecimiento espiritual y personal.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#b08bc8] transition-colors duration-300"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/4">
            <h4 className="text-xl font-serif mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#b08bc8] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h4 className="text-xl font-serif mb-4">Horario de contacto</h4>
            <p className="text-gray-300 mb-2">Lunes a Viernes: 10:00 - 19:00</p>
            <p className="text-gray-300 mb-4">Sábados: 10:00 - 14:00</p>
            <p className="text-gray-300">
              <strong>WhatsApp:</strong> <a href="https://wa.me/34641931076" target="_blank" rel="noopener noreferrer" className="hover:text-[#b08bc8]">+34 641 931 076</a>
            </p>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Patry - Médium y Canal Espiritual. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-[#b08bc8] transition-colors duration-300">Política de Privacidad</a>
            {' '}&bull;{' '}
            <a href="#" className="hover:text-[#b08bc8] transition-colors duration-300">Términos y Condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;