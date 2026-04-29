import Section from '../components/Section';

export default function Home() {
  return (
    <Section id="home" title="Lorend's" bgColor="bg-rose-50/90">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
          Un espacio donde la belleza se transforma en confianza. 
          Experiencia premium en cuidado capilar, facial y estético.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a 
            href="/servicios" 
            className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all active:scale-95"
          >
            Ver Servicios
          </a>
          <a 
            href="/galeria" 
            className="border-2 border-gray-800 hover:bg-gray-900 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Ver Galería
          </a>
        </div>
      </div>
    </Section>
  );
}