// src/components/Header.jsx

const Header = () => {
  return (
    <header className="min-h-screen bg-gradient-to-b from-[#f5f3f7] to-[#e6e0ed] py-20 px-4 md:px-12 flex items-center relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-[#2c3e50] md:ml-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-[#6c3483]">
            Patry
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-serif italic text-[#4a235a]">
            "Conectando con lo invisible, traduciendo mensajes del más allá"
          </p>
          <p className="text-lg leading-relaxed mb-8 max-w-xl">
            Soy médium y canal espiritual, con el don de conectar con energías y seres de otros planos. Mi misión es servir como puente entre lo visible y lo invisible, ayudando a las personas a encontrar respuestas, sanación y paz interior.
          </p>
          <p className="text-lg leading-relaxed mb-8 max-w-xl">
            A través de sesiones individuales y grupales, ofrezco lecturas y canalizaciones que proporcionan orientación espiritual y claridad en momentos de incertidumbre. Con sensibilidad, respeto y ética profesional, mi trabajo busca aportar luz a quienes buscan entender sus experiencias más allá del plano físico.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="#contact" className="px-6 py-3 bg-[#6c3483] text-white rounded-md hover:bg-[#4a235a] transition-colors duration-300 shadow-lg">Contactar</a>
            <a href="#services" className="px-6 py-3 border border-[#6c3483] text-[#6c3483] rounded-md hover:bg-[#6c3483] hover:text-white transition-colors duration-300 shadow-lg">Servicios</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
            {/* Enhanced celestial effects */}
            <div className="absolute inset-[-40px] rounded-full bg-gradient-to-r from-[#b08bc8]/40 via-[#e6e0ed]/30 to-[#6c3483]/30 blur-xl animate-pulse"></div>
            
            {/* Celestial symbols and light sparkles */}
            <div className="absolute inset-[-30px] rounded-full">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full shadow-lg shadow-[#b08bc8]/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.7 + 0.3,
                    animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`
                  }}
                ></div>
              ))}
              
              {/* Spiritual light rays */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute top-1/2 left-1/2 h-full w-[1px] bg-gradient-to-t from-transparent via-[#b08bc8] to-transparent"
                      style={{ transform: `rotate(${i * 30}deg)` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main image container with enhanced ethereal glow */}
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-[8px] border-[#6c3483]/60 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <img
                    src="/images/artist-portrait.jpeg"
                    alt="Patry - Médium y Canal Espiritual"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6c3483]/20 to-transparent z-10 rounded-full"></div>
                </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;