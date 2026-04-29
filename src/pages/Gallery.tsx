import Section from '../components/Section';

export default function Gallery() {
  return (
    <Section id="gallery" title="Galería" bgColor="bg-amber-50/90">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="overflow-hidden rounded-3xl shadow-lg group aspect-square">
            <img 
              src={`/gallery-${i}.jpg`} 
              alt={`Trabajo ${i}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}