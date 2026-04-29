import Section from '../components/Section';

export default function Services() {
  const services = [
    { name: "Corte y Peinado", desc: "Estilos modernos y clásicos", price: "Desde $35" },
    { name: "Coloración", desc: "Técnicas balayage y mechas", price: "Desde $65" },
    { name: "Tratamientos Capilares", desc: "Keratina y botox capilar", price: "Desde $80" },
    { name: "Maquillaje Profesional", desc: "Para eventos y sesiones", price: "Desde $45" },
    { name: "Manicura y Pedicura", desc: "Gel, acrílico y spa", price: "Desde $25" },
    { name: "Extensiones de Pestañas", desc: "Volumen ruso y clásico", price: "Desde $55" },
  ];

  return (
    <Section title="Nuestros Servicios" bgColor="bg-purple-50/90">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-white/70 p-8 rounded-2xl hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <p className="text-rose-600 font-medium">{service.price}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}