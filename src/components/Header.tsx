import { useState, useEffect } from 'react';
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
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Animación de ocultar/mostrar header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling hacia abajo → ocultar header
        setIsHidden(true);
      } else {
        // Scrolling hacia arriba → mostrar header
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
      isHidden ? '-translate-y-full' : 'translate-y-0' }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleNavigation('/')} >
          <img src="./image/logo.png" alt="logo" className="h-13 w-8 object-cover" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white">Lorend's</h1>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-2 text-white font-medium">
          {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-6 py-2.5 rounded-3xl font-medium text-sm transition-all duration-300
                    ${isActive 
                      ? 'bg-rose-400 text-white shadow-md' 
                      : 'text-gray-100 hover:bg-rose-100 hover:text-rose-600'
                    }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Botón Hamburguesa */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-gray-700 hover:bg-white/70 rounded-2xl transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/30">
          <nav className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`text-left px-6 py-4 rounded-2xl font-medium text-lg transition-all
                    ${isActive 
                      ? 'bg-rose-600 text-white' 
                      : 'hover:bg-rose-50 text-gray-700'
                    }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}