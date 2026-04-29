import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Section title="Bienvenidos a Lorend's" bgColor="bg-rose-50/90">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl text-gray-700 leading-relaxed mb-10">
            Un espacio donde la belleza, la elegancia y el cuidado se unen para realzar tu mejor versión.
          </p>
          <a href="/servicios" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full text-lg font-medium transition">
            Explorar Servicios
          </a>
        </div>
      </Section>
    </>
  );
}