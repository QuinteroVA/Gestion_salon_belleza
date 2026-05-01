import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />

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