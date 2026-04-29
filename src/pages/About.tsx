import Section from '../components/Section';

export default function About() {
  return (
    <>
      {/* Sección Principal */}
      <Section title="Nuestra Historia" bgColor="bg-rose-50/90">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg text-gray-700">
            <p className="text-xl leading-relaxed">
              Lorend's nació en 2018 con una visión clara: crear un espacio donde la belleza no solo se vea, 
              sino que se sienta. Un lugar donde cada cliente recibe atención personalizada y sale sintiéndose 
              más hermosa y confiada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-6 text-gray-900">Nuestra Filosofía</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-rose-500 mt-1">✦</span>
                  <span>La belleza comienza desde el autocuidado y el amor propio.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 mt-1">✦</span>
                  <span>Cada servicio es una experiencia única y personalizada.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 mt-1">✦</span>
                  <span>Usamos solo productos de la más alta calidad y técnicas actualizadas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 mt-1">✦</span>
                  <span>Creemos que la elegancia está en los detalles.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 p-10 rounded-3xl shadow-inner">
              <h4 className="font-serif text-2xl mb-6 text-center">Nuestros Valores</h4>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="font-medium">Sostenibilidad</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💎</div>
                  <p className="font-medium">Excelencia</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">❤️</div>
                  <p className="font-medium">Pasión</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🌟</div>
                  <p className="font-medium">Elegancia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección Equipo */}
      <Section 
        title="Nuestro Equipo" 
        bgColor="bg-purple-50/90"
      >
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              name: "Lorena Bravo",
              role: "Fundadora & Estilista Senior",
              bio: "Más de 12 años de experiencia. Especialista en colorimetría y cortes de precisión.",
              image: "/team/lorena.jpg"
            },
            {
              name: "Camila Torres",
              role: "Especialista en Color y Tratamientos",
              bio: "Certificada en técnicas europeas de balayage y keratinoterapia.",
              image: "/team/camila.jpg"
            },
            {
              name: "Valentina Ruiz",
              role: "Maquilladora y Experta en Pestañas",
              bio: "Makeup artist internacional. Especialista en looks naturales y de alta definición.",
              image: "/team/valentina.jpg"
            }
          ].map((member, index) => (
            <div key={index} className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-rose-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sección Final */}
      <Section 
        title="Ven a Conocernos" 
        bgColor="bg-amber-50/90"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-10">
            Te esperamos en nuestro salón ubicado en el corazón de Quito, donde cada visita se convierte 
            en una experiencia inolvidable de belleza y bienestar.
          </p>
          
          <div className="inline-flex flex-col items-center gap-4 bg-white/80 px-12 py-8 rounded-3xl">
            <p className="font-medium">📍 Quito, Pichincha</p>
            <p className="text-rose-600">Abierto de lunes a sábado • 9:00 AM - 8:00 PM</p>
            
            <a 
              href="#" 
              className="mt-4 inline-block bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-medium transition-all"
            >
              Reservar Cita
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}