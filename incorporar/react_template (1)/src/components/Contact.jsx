// src/components/Contact.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <div 
            ref={ref}
            className={`transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-serif text-[#6c3483] mb-6">Contacta Conmigo</h2>
            <p className="mb-8 text-lg">
              ¿Tienes alguna pregunta o deseas concertar una sesión? Estoy aquí para ayudarte en tu camino espiritual.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-[#6c3483] mr-4">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Teléfono & WhatsApp</h4>
                  <p>+34 641 931 076</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#6c3483] mr-4">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Ubicación</h4>
                  <p>Sesiones presenciales en Madrid<br />Consultas online para todo el mundo</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <a href="https://www.instagram.com/patry_esencia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#6c3483] text-white flex items-center justify-center hover:bg-[#4a235a] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573873631675&rdid=58AC6y6xeIuRymyH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18WSBj3MQZ%2F#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#6c3483] text-white flex items-center justify-center hover:bg-[#4a235a] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com/@patryesencia?si=VVyN1FxqGyV821ju" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#6c3483] text-white flex items-center justify-center hover:bg-[#4a235a] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@patryesencia?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#6c3483] text-white flex items-center justify-center hover:bg-[#4a235a] transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div 
            className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-[#e1f3e1] rounded-full mx-auto flex items-center justify-center mb-4">
                <i className="fab fa-whatsapp text-4xl text-[#25D366]"></i>
              </div>
              <h3 className="text-2xl font-serif text-[#6c3483]">Contacta por WhatsApp</h3>
              <p className="text-gray-600 mt-2">Respuesta rápida y directa para consultas y reservas</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Horario de atención</h4>
                <p className="text-gray-600">Lunes a Viernes: 10:00 - 19:00<br />Sábados: 10:00 - 14:00</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Servicios disponibles</h4>
                <p className="text-gray-600">Consultas personalizadas, programación de sesiones, información sobre tarifas y más.</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/34641931076" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full px-6 py-4 bg-[#25D366] text-white rounded-md hover:bg-[#1ba84f] transition-colors duration-300 shadow-lg flex items-center justify-center gap-2 font-medium"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;