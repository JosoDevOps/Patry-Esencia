const TestimonialCard = ({ name, location, text }) => {
  return (
    <div className="bg-base rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="mb-4">
        <div>
          <h4 className="font-medium text-accent/90">{name}</h4>
          <p className="text-sm text-dark/70">{location}</p>
        </div>
      </div>
      <p className="text-dark italic">"{text}"</p>
      <div className="mt-4 text-accent">
        <span>★★★★★</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Natalia",
      location: "Canarias",
      text: "Tienes un don con tanta luz capaz de captar con exactitud, el amor que era mi abuela. GRACIAS, porque gracias a ti, he vuelto a estar con ella. Sé que mi abuela está tambien muy agradecida contigo,  porque sin ti, esto no hubiera sido posible. Con toda mi alma y con todo el amor de mi abuela MIL GRACIAS, y que tu camino siga con mucha luz.",
      category: "individual"
    },
    {
      name: "Yenifer",
      location: "Las Palmas de Gran Canaria",
      text: "Hoy viví una experiencia que me tocó el alma. Tuve una sesión de mediumnidad con Patry Esncia y fue simplemente maravillosa. Logró conectar con mi padre, que ya no está en este plano, y me hizo reír, llorar y sentirlo cerca de una forma que jamás olvidaré. Patry tiene un don muy especial, pero sobretodo una sensibilidad y una luz que abrazan. Gracias de corazón por este momento tan sanador, tan lleno de amor y verdad.",
      category: "individual"
    },
    {
      name: "Iván",
      location: "Canarias",
      text: "Hola soy Iván, el chico que tuvo la sesión hoy contigo y la verdad que me sentí genial! Pude dar un paso atrás, tener recuerdos bonitos y recibir algunas palabras de ese ser querido,saber que opina en detalles de mi vida actual, muy agradable se me pasó el tiempo rápido, pero ha sido muy productivo, asique muchas gracias por acercarme un rato a esa persona que se fué y vivió conmigo mucho tiempo, lo recomiendo 100% si alguien quiere experimentar recuerdos del pasado con alguien que ha no está, oye que un besote muchas gracias y seguimos en contacto😂🥰",
      category: "individual"
    },
    {
      name: "Isabel",
      location: "Canarias",
      text: "Estoy eternamente agradecida con Patry Esencia 🥹❣ He tenido una sesión, para contactar con un ser querido... y no tengo palabras♡! Cada detalle que mostraba mi ser querido, era como si la tuviera delante y me estuviera hablando directamente a mi. Ha sido MARAVILLOSO, haberte encontrado Patry Esencia y saber que cuando quiera volver a sentir y hablar tan directa con mi abuela, pueda hacerlo mediante ti. Me has dado detalles que solo mi abuela y yo sabiamos, as conseguido sanar una parte de mi, que estaba bloqueada desde que mi abuela partió. Y el volver a sentirla así, para mí , ha sido volver a estar con ella",
      category: "individual"
    },
    {
      name: "Ado",
      location: "Barcelona",
      text: "Mil gracias por atenderme, por acercarmelo, por transmitirme lo que siente.... me da tremenda envídia no tener esa capacidad de sentirlo,ni imaginas.... le hecho tanto de menos! Gracias, enserio,no se si me quedo más tranquila o no, pero tendré en cuenta todo lo que me has comentado,a ver si me ayuda a sanar más mi dolor, Gracias.",
      category: "individual"
    },
    {
      name: "Yesica",
      location: "canarias",
      text: "Patry Esencia es una persona increíble, con un don maravilloso. Me ayudó a conectar con mi abuela y me dio mensajes que solo ella podía saber. Fue una experiencia muy emotiva y sanadora. Recomiendo sus sesiones a todos los que quieran sentir la presencia de sus seres queridos.La sesión con Patry ha sido inolvidable, creando en mí desde el primer momento una sensación de paz inigualable a la que haya podido sentir en cualquier otro momento de mi vida. Ha acertado con cada mensaje que me ha transmitido, incluso cosas que en ese momento no le veía el sentido, con el paso de los días lo he podido comprobar. Es increíble la capacidad de comunicación que tiene para transmitir todo aquello que un ser querido le muestra e interpreta de esa manera tan sublime los mensajes. Solo puedo darle  las gracias por calmar mi alma y llegar a ella. No lo dudes y confía en ella para contactar cln tus seres queridos.",
      category: "individual"
    },
    {
      name: "Susana",
      location: "Barcelona",
      text: "Gracias Patry esencia por la sesión tan maravillosa que tuvimos ayer. Doi gracias que haiga personas tan sensibles y especiales como tú. Me lleno de amor poder contactar con mi ser querido. Gracias",
      category: "individual"
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-serif text-center text-accent mb-4">Testimonios</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-dark">
        Descubre las experiencias de personas que han conectado con el mundo espiritual a través de mi guía.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="#contact" 
          className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-300 shadow-lg"
        >
          Reserva tu sesión
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
