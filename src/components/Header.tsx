import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Productos', path: '/productos' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Acerca de', path: '/acerca' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (path: string) => {
    setIsOpen(false);
    navigate(path);
    // Scroll suave después de navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('/')}
        >
          <img src="/logo.png" alt="Lorend's" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Lorend's</h1>
            <p className="text-xs text-white/70 -mt-1">Salón de Belleza</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => scrollToSection(link.path)}
              className={`hover:text-rose-300 transition-colors ${location.pathname === link.path ? 'text-rose-300' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg">
          <nav className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className="text-left py-4 text-lg text-gray-800 hover:text-rose-600"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}