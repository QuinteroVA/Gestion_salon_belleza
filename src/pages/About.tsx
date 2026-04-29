import Section from '../components/Section';

export default function About() {
  return (
    <>
      <Section id="about" title="Nuestra Historia" bgColor="bg-rose-50/90">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <p className="text-xl text-gray-700 leading-relaxed">
            Lorend's nació con la misión de ofrecer una experiencia de belleza excepcional, 
            combinando técnicas modernas, productos premium y atención personalizada.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white/70 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6">Nuestra Filosofía</h3>
              <ul className="space-y-5 text-gray-700">
                {["La belleza real nace del autocuidado", "Cada cliente merece atención exclusiva", "Solo usamos productos de alta calidad", "La elegancia está en los detalles"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1 text-xl">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/70 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-6">Nuestros Valores</h3>
              <div className="grid grid-cols-2 gap-8 text-center text-lg font-medium">
                {["🌿 Sostenibilidad", "💎 Excelencia", "❤️ Pasión", "🌟 Elegancia"].map((v, i) => <div key={i}>{v}</div>)}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Nuestro Equipo" bgColor="bg-purple-50/90">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Lorena Vargas", role: "Fundadora & Estilista Senior", image: "/team/lorena.jpg" },
            { name: "Camila Torres", role: "Especialista en Color", image: "/team/camila.jpg" },
            { name: "Valentina Ruiz", role: "Maquilladora Profesional", image: "/team/valentina.jpg" }
          ].map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-rose-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}