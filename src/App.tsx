import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import About from './pages/About';

const pageTitles: Record<string, string> = {
  '/': 'Inicio',
  '/servicios': 'Servicios',
  '/productos': 'Productos',
  '/galeria': 'Galería',
  '/acerca': 'Acerca de',
};

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || 'Inicio';
    document.title = `Lorend's | ${currentTitle}`;
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />
        
        <TitleUpdater /> {/* ← Este componente actualiza el título */}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/acerca" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;