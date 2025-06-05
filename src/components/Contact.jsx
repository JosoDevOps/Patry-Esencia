// src/components/Contact.jsx

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
            <h2 className="text-4xl font-serif text-accent mb-6">Contacta Conmigo</h2>
            <p className="mb-8 text-lg text-dark">
              ¿Tienes alguna pregunta o deseas concertar una sesión? Estoy aquí para ayudarte en tu camino espiritual.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Teléfono & WhatsApp</h4>
                  <p>+34 641 931 076</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Ubicación</h4>
                  <p>Consultas online para todo el mundo</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <a href="https://www.instagram.com/patry_esencia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573873631675" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com/@patryesencia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@patryesencia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-secondary transition-colors">
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
              <div className="w-20 h-20 bg-misty rounded-full mx-auto flex items-center justify-center mb-4">
                <i className="fab fa-whatsapp text-4xl text-[#25D366]"></i>
              </div>
              <h3 className="text-2xl font-serif text-accent">Contacta por WhatsApp</h3>
              <p className="text-dark/70 mt-2">Respuesta rápida y directa para consultas y reservas</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-misty p-4 rounded-lg">
                <h4 className="font-medium">Horario de atención</h4>
                <p className="text-dark/70">Lunes a Viernes: 10:00 - 19:00<br />Sábados: 10:00 - 14:00</p>
              </div>
              
              <div className="bg-misty p-4 rounded-lg">
                <h4 className="font-medium">Servicios disponibles</h4>
                <p className="text-dark/70">Consultas personalizadas, programación de sesiones, información sobre tarifas y más.</p>
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
