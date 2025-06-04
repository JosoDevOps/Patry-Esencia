// src/components/Services.jsx

const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="bg-[#f0f9ff] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1">
      {/* Subtle celestial background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0284c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#7dd3fc]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Icon with enhanced styling */}
      <div className="text-[#6c3483] text-4xl mb-4 relative">{icon}
        <span className="absolute -inset-3 bg-[#6c3483]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </div>
      
      <h3 className="text-2xl font-serif text-[#4a235a] mb-3 relative z-10">{title}</h3>
      <p className="text-[#2c3e50] mb-4 flex-grow relative z-10">{description}</p>
      {price && (
        <div className="mt-auto relative z-10">
          <span className="block text-[#6c3483] font-medium text-lg">{price}</span>
          <a 
            href="#contact" 
            className="inline-block mt-3 px-4 py-2 bg-[#6c3483]/10 text-[#6c3483] rounded hover:bg-[#6c3483]/20 transition-colors duration-300"
          >
            Consultar disponibilidad
          </a>
        </div>
      )}
      
      {/* Subtle sparkle animation */}
      <div className="absolute w-2 h-2 rounded-full bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        style={{
          top: '10%',
          right: '10%',
          animation: 'twinkle 3s infinite ease-in-out'
        }}>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "✨",
      title: "Lectura Individual",
      description: "Una sesión personalizada donde conecto con guías y seres queridos que han pasado al otro plano para recibir mensajes y orientación específica para tu situación actual.",
      price: "Desde 80€"
    },
    {
      icon: "🔮",
      title: "Sesiones Grupales",
      description: "Experiencias colectivas donde los participantes reciben mensajes del más allá. Un espacio seguro para conectar con energías y recibir orientación espiritual compartida.",
      price: "Desde 40€ por persona"
    },
    {
      icon: "🌟",
      title: "Limpieza Energética",
      description: "Proceso de purificación para eliminar energías negativas de personas o espacios, restaurando el equilibrio y permitiendo que la energía positiva fluya libremente.",
      price: "Desde 60€"
    },
    {
      icon: "🧿",
      title: "Mentoría Espiritual",
      description: "Acompañamiento personalizado para desarrollar tus propias habilidades intuitivas y espirituales, con ejercicios prácticos y orientación continua.",
      price: "Consultar precios"
    }
  ];

  return (
    <div className="container mx-auto relative">
      {/* Celestial background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#b08bc8]/10 rounded-full blur-xl opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#6c3483]/10 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#b08bc8]/10 rounded-full blur-xl opacity-40"></div>
      
      <h2 className="text-4xl font-serif text-center text-[#6c3483] mb-4 relative z-10">Mis Servicios</h2>
      <div className="relative mx-auto w-40 h-1.5 bg-gradient-to-r from-transparent via-[#6c3483]/60 to-transparent rounded-full mb-6"></div>
      
      <p className="text-center max-w-2xl mx-auto mb-12 text-[#2c3e50] relative z-10">
        Ofrezco diferentes formas de conectar con el mundo espiritual, adaptadas a tus necesidades y búsqueda personal.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="mt-16 text-center relative">
        {/* Additional celestial effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-[#b08bc8]/10 to-transparent rounded-full blur-xl opacity-40 -z-10"></div>
        
        <h3 className="text-2xl font-serif text-[#4a235a] mb-4 relative z-10">¿Necesitas algo especial?</h3>
        <p className="max-w-2xl mx-auto mb-8 text-[#2c3e50] relative z-10">
          También ofrezco servicios personalizados según tus circunstancias y necesidades espirituales particulares.
        </p>
        
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-[#6c3483] text-white rounded-md hover:bg-[#4a235a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 relative z-10 group"
        >
          <span className="absolute inset-0 rounded-md bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          Consulta tu caso
        </a>
        
        {/* Subtle star sparkles */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Services;