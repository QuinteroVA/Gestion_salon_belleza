import Section from '../components/Section';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Champú Hidratante Premium",
      category: "Cuidado Capilar",
      price: "$28",
      description: "Fórmula con keratina y aceites naturales que hidrata profundamente sin apelmazar.",
      image: "/products/product-1.jpg"
    },
    {
      id: 2,
      name: "Acondicionador Reparador",
      category: "Cuidado Capilar",
      price: "$32",
      description: "Reconstruye el cabello dañado por tintes y herramientas de calor.",
      image: "/products/product-2.jpg"
    },
    {
      id: 3,
      name: "Aceite de Argán 100% Puro",
      category: "Tratamiento",
      price: "$45",
      description: "Nutrición intensa, brillo y protección térmica. Ideal para cabello seco.",
      image: "/products/product-3.jpg"
    },
    {
      id: 4,
      name: "Mascarilla de Keratina",
      category: "Tratamiento",
      price: "$38",
      description: "Tratamiento intensivo que sella las cutículas y reduce el frizz.",
      image: "/products/product-4.jpg"
    },
    {
      id: 5,
      name: "Esmalte Gel Premium",
      category: "Uñas",
      price: "$18",
      description: "Duración hasta 21 días. Amplia gama de colores elegantes.",
      image: "/products/product-5.jpg"
    },
    {
      id: 6,
      name: "Serum Facial Anti-Aging",
      category: "Cuidado Facial",
      price: "$52",
      description: "Con ácido hialurónico y péptidos. Reduce líneas de expresión.",
      image: "/products/product-6.jpg"
    },
  ];

  return (
    <Section title="Productos Profesionales" bgColor="bg-white/90">
      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Selección curada de productos de alta calidad utilizados en nuestro salón y disponibles para ti.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="uppercase text-xs tracking-widest text-rose-500 mb-2">
                {product.category}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{product.name}</h3>
              <p className="text-gray-600 flex-1 mb-6">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-3xl font-bold text-rose-600">{product.price}</span>
                <button className="bg-gray-900 hover:bg-rose-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 italic">
          Todos nuestros productos son cruelty-free y están formulados con ingredientes premium.
        </p>
      </div>
    </Section>
  );
}