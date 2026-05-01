import { useLocation } from 'react-router-dom';

const pageNames: Record<string, string> = {
  '/': 'Inicio',
  '/servicios': 'Servicios',
  '/productos': 'Productos',
  '/galeria': 'Galería',
  '/acerca': 'Acerca de',
};

export default function Footer() {
  const location = useLocation();
  const currentPage = pageNames[location.pathname] || 'Inicio';

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-rose-300/40 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <img src="/image/logo.png" alt="logo" className="h-9 w-5" />
        </div>

        <div className="text-center text-white/100 text-xs">
          © {new Date().getFullYear()} Lorend's | Todos los derechos reservados.
        </div>

        <div className="font-medium tracking-wide">{currentPage}</div>

      </div>
    </footer>
  );
}