// src/components/Services.jsx

import { duration } from "@mui/material";

const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="bg-misty rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" aria-hidden="true"></div>
      
      <div className="text-accent text-4xl mb-4 relative">
        {icon}
        <span className="absolute -inset-3 bg-accent/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </div>
      
      <h3 className="text-2xl font-serif text-accent/90 mb-3 relative z-10">{title}</h3>
      <p className="text-dark mb-4 flex-grow relative z-10">{description}</p>
      {price && (
        <div className="mt-auto relative z-10">
          <span className="block text-accent font-medium text-lg">{price}</span>
          <a 
            href="#contact" 
            className="inline-block mt-3 px-4 py-2 bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors duration-300"
          >
            Consultar disponibilidad
          </a>
        </div>
      )}

      <div 
        className="absolute w-2 h-2 rounded-full bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        style={{
          top: '10%',
          right: '10%',
          animation: 'twinkle 3s infinite ease-in-out'
        }}
        aria-hidden="true"
      ></div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "✨",
      title: "Sesión Mediumnidad",
      description: "Una sesión personalizada donde conecto con guías , seres queridos y mascotas que han pasado al otro plano para recibir mensajes y orientación específica para tu situación actual.",
      price: "50€",
      duration: "40-60 minutos"
    },
    {
      icon: "🔮",
      title: "Mediumnidad con 2 mediums",
      description: "Experiencias con dos mediums que recibimos mensajes del más allá. Conectamos con guías y seres queridos que han pasado al otro plano para recibir mensajes y recibir orientación espiritual por dos vías.",
      price: "80€",
      duration: "40-60 minutos"
    },
    {
      icon: "🌟",
      title: "Rituales y limpieza Energética",
      description: "Proceso de purificación para eliminar energías negativas de personas o espacios, restaurando el equilibrio y permitiendo que la energía positiva fluya libremente.",
      price: "Desde 20€",
      disclaimer: "Los precios pueden variar según el tipo de ritual y la complejidad del caso."
    },
    {
      icon: "🧿",
      title: "Mentoría Espiritual",
      description: "Acompañamiento personalizado para desarrollar tus propias habilidades intuitivas y espirituales, con ejercicios prácticos y orientación continua.",
      price: "Consultar precios"
    },
    {
      icon: "🕊️",
      title: "Lectura de Registros Akáshicos",
      description: "Acceso a la información del alma y su historia a través de los Registros Akáshicos, proporcionando claridad y comprensión sobre tu propósito y camino espiritual.",
      price: "Consultar precios"
    },
    {
      icon: "🌌",
      title: "Lectura y sanación con pendulo",
      description: "Utilizo el péndulo para diagnosticar y sanar bloqueos energéticos, proporcionando una herramienta poderosa para la sanación personal y espiritual.",
      price: "Desde 15€",
      duration: "30 minutos"
    }
  ];

  return (
    <div className="container mx-auto relative">
      {/* Fondos celestiales decorativos */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl opacity-60" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl opacity-60" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl opacity-40" aria-hidden="true"></div>

      <h2 className="text-4xl font-serif text-center text-accent mb-4 relative z-10">Mis Servicios</h2>
      <div className="relative mx-auto w-40 h-1.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent rounded-full mb-6"></div>

      <p className="text-center max-w-2xl mx-auto mb-12 text-dark relative z-10">
        Ofrezco diferentes formas de conectar con el mundo espiritual, adaptadas a tus necesidades y búsqueda personal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} {...service} />
        ))}
      </div>

      <div className="mt-16 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-accent/10 to-transparent rounded-full blur-xl opacity-40 -z-10" aria-hidden="true"></div>

        <h3 className="text-2xl font-serif text-accent/90 mb-4 relative z-10">¿Necesitas algo especial?</h3>
        <p className="max-w-2xl mx-auto mb-8 text-dark relative z-10">
          También ofrezco servicios personalizados según tus circunstancias y necesidades espirituales particulares.
        </p>

        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 relative z-10 group"
        >
          <span className="absolute inset-0 rounded-md bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          Consulta tu caso
        </a>

        {[...Array(5)].map((_, i) => (
          <div 
            key={`twinkle-${i}`}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`
            }}
            aria-hidden="true"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Services;
