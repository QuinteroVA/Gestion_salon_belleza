import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'INICIO', path: '/' },
  { name: 'SERVICIOS', path: '/servicios' },
  { name: 'PRODUCTOS', path: '/productos' },
  { name: 'GALERÍA', path: '/galeria' },
  { name: 'ACERCA DE', path: '/acerca' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavigation('/')}
        >
          <img 
            src="/logo.png" 
            alt="logo" 
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-rose-300 transition-all"
          />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">Lorend's</h1>
            <p className="text-[10px] text-white/70 -mt-1 font-medium">SALÓN DE BELLEZA</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-9 text-white font-medium">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`hover:text-rose-300 transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-rose-300 
                ${location.pathname === link.path ? 'text-rose-300 border-rose-300' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
          <nav className="flex flex-col py-6 px-6 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className="text-left py-4 px-6 text-lg font-medium text-gray-800 hover:bg-rose-50 hover:text-rose-600 rounded-2xl transition-all"
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