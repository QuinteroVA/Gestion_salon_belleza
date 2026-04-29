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
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Lorend's" className="h-7 w-7 rounded-full" />
        </div>

        <div className="text-center text-white/70 text-xs">
          © {new Date().getFullYear()} Lorend's | Todos los derechos reservados.
        </div>

        <div className="font-medium">{currentPage}</div>
        
      </div>
    </footer>
  );
}