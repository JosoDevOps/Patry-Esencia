// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            {/* Decorative elements for mystical feel */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#b08bc8]/30 blur-md"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#6c3483]/20 blur-md"></div>
            
            {/* Main image */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/featured-1.jpg" 
                alt="Patry en meditación" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-4xl font-serif text-[#6c3483] mb-6">Sobre Mi</h2>
          
          <div className="space-y-4 text-[#2c3e50]">
            <p>
              Mi nombre es Patry y soy médium, canal espiritual y guía en el desarrollo intuitivo. Desde niña he tenido la sensibilidad para percibir energías y conectar con dimensiones que van más allá del plano físico. Durante años, exploré y desarrollé este don natural hasta convertirlo en mi propósito de vida.
            </p>
            
            <p>
              Mi camino espiritual comenzó como una búsqueda personal de respuestas ante experiencias que no podía explicar. Con el tiempo, descubrí que podía servir como puente entre el mundo visible e invisible, ayudando a otras personas a encontrar claridad, sanación y conexión con sus seres queridos que han pasado al otro plano.
            </p>
            
            <blockquote className="italic border-l-4 border-[#6c3483] pl-4 my-6">
              "Cada lectura es única, como única es cada alma y su camino. Mi trabajo es ser un canal claro y ético para que los mensajes lleguen con la mayor pureza posible."
            </blockquote>
            
            <p>
              Me he formado en diversas disciplinas espirituales y metafísicas, incluyendo mediumnidad, canalización, tarot intuitivo y sanación energética. Mi enfoque combina el respeto por las tradiciones ancestrales con una visión contemporánea de la espiritualidad, adaptada a las necesidades actuales.
            </p>
            
            <p>
              En cada sesión, mi prioridad es crear un espacio seguro, respetuoso y libre de juicios, donde puedas conectar con la sabiduría de tu alma y recibir los mensajes que necesitas en tu momento presente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;