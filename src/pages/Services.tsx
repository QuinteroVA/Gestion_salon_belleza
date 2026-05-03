import Section from '../components/Section';

export default function Services() {
  const services = [
    { name: "Corte y Peinado", desc: "Estilos modernos, clásicos y personalizados.", price: "Desde $35" },
    { name: "Coloración y Balayage", desc: "Técnicas avanzadas de color con productos premium.", price: "Desde $65" },
    { name: "Tratamientos Capilares", desc: "Keratina, botox capilar y reconstrucción.", price: "Desde $80" },
    { name: "Maquillaje Profesional", desc: "Para bodas, eventos y sesiones fotográficas.", price: "Desde $45" },
    { name: "Manicura y Pedicura Spa", desc: "Gel, acrílico y tratamientos completos.", price: "Desde $25" },
    { name: "Extensiones de Pestañas", desc: "Volumen ruso, clásico e híbrido.", price: "Desde $55" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('./image/services.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60" />
      <Section id="services" title="Nuestros Servicios" bgColor="bg-rose-1/10">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/30 p-8 rounded-3xl hover:shadow-xl transition-all border border-white/50">
              <h3 className="text-2xl font-semibold text-white mb-3">{service.name}</h3>
              <p className="text-white leading-relaxed mb-6">{service.desc}</p>
              <p className="text-rose-600 font-semibold text-xl">{service.price}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}