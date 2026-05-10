import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

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
      <div className="grid grid-cols-3 items max-w-7xl mx-auto px-6 py-3">
        
        {/* Redes Sociales */}
        {/* <div className="grid grid-cols-3 items-center gap-4">*/}
          <div className="flex justify-start items-center gap-4">
            <a href="https://facebook.com/lorends" target="_blank" rel="noopener noreferrer"
              className="text-[#e11d48] hover:text-rose-600 transition-all hover:scale-110"
                aria-label="Facebook">
              <FaFacebookF size={30} />
            </a>
            <a href="https://instagram.com/lorends" target="_blank" rel="noopener noreferrer"
              className="text-[#e11d48] hover:text-rose-600 transition-all hover:scale-110"
                aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="https://tiktok.com/@lorends" target="_blank" rel="noopener noreferrer"
              className="text-[#e11d48] hover:text-rose-600 transition-all hover:scale-110"
                aria-label="TikTok">
              <FaTiktok size={30} />
            </a>
            <a href="https://wa.me/593987654321" target="_blank" rel="noopener noreferrer"
              className="text-[#e11d48] hover:text-rose-600 transition-all hover:scale-110"
                aria-label="WhatsApp">
              <FaWhatsapp size={30} />
            </a>
          </div>
        {/* </div> */}
        
        {/* Copyright */}
        <div className="flex justify-center text-center text-xs">
          © {new Date().getFullYear()} Lorend's | Todos los derechos reservados.
        </div>
        
        {/* Página actual */}
        <div className="flex justify-end font-medium tracking-wide">{currentPage}</div>
      </div>
    </footer>
  );
}