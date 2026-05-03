import Section from '../components/Section';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('./image/home.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60" />
      <Section id="home" title="Lorend's" bgColor="bg-rose-1/10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            Un espacio donde la belleza se transforma en confianza. 
            Experiencia premium en cuidado capilar, facial y estético.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="/servicios" 
              className="border-2 border-rose-300 hover:bg-rose-300 text-white hover:text-rose-700 px-10 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Ver Servicios
            </a>
            <a href="/galeria" 
              className="border-2 border-rose-300 hover:bg-rose-300 text-white hover:text-rose-700 px-10 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Ver Galería
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}