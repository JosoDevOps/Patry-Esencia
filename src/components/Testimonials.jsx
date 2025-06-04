// src/components/Testimonials.jsx

const TestimonialCard = ({ name, location, text,  }) => {
  return (
    <div className="bg-[#f5f3f7] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#6c3483]">
          <img 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-[#4a235a]">{name}</h4>
          <p className="text-sm text-[#2c3e50]/70">{location}</p>
        </div>
      </div>
      <p className="text-[#2c3e50] italic">"{text}"</p>
      <div className="mt-4 text-[#b08bc8]">
        <span>★★★★★</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Laura Martínez",
      location: "Madrid",
      text: "La sesión con Patry fue reveladora. Conectó con mi abuela fallecida y me transmitió mensajes que solo ella podía conocer. Me aportó una paz inmensa.",
     // image: "/images/portfolio-1.jpg",
      category: "individual"
    },
    {
      name: "Carlos Sánchez",
      location: "Barcelona",
      text: "Al principio era escéptico, pero Patry me sorprendió con detalles específicos sobre mi vida personal que nadie podía conocer. La experiencia cambió mi visión del mundo espiritual.",
      //image: "/images/portfolio-2.jpg",
      category: "individual"
    },
    {
      name: "María González",
      location: "Valencia",
      text: "Participé en una sesión grupal y aunque éramos varias personas, sentí que los mensajes eran profundamente personales. Patry tiene un don especial para conectar con el más allá.",
     // image: "/images/portfolio-3.jpg",
      category: "grupo"
    },
    {
      name: "Javier Rodríguez",
      location: "Sevilla",
      text: "La limpieza energética que Patry realizó en mi hogar transformó por completo el ambiente. Las tensiones disminuyeron y ahora se respira paz y armonía.",
     // image: "/images/portfolio-4.jpg",
      category: "limpieza"
    },
    {
      name: "Ana López",
      location: "Bilbao",
      text: "Con la mentoría de Patry he podido desarrollar mis propias habilidades intuitivas. Su guía es clara, respetuosa y muy profesional. Totalmente recomendable.",
     // image: "/images/portfolio-5.jpg",
      category: "mentoria"
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-serif text-center text-[#6c3483] mb-4">Testimonios</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-[#2c3e50]">
        Descubre las experiencias de personas que han conectado con el mundo espiritual a través de mi guía.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-[#6c3483] text-white rounded-md hover:bg-[#4a235a] transition-colors duration-300 shadow-lg"
        >
          Reserva tu sesión
        </a>
      </div>
    </div>
  );
};

export default Testimonials;