import { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Leistungen from './pages/Leistungen';
import Unternehmen from './pages/Unternehmen';
import Landeigentuemer from './pages/Landeigentuemer';
import Flaechenpruefung from './pages/Flaechenpruefung';
import Referenzen from './pages/Referenzen';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

type Page = 'home' | 'leistungen' | 'unternehmen' | 'landeigentuemer' | 'flaechenpruefung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle navigation
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for navigation events from Navbar
  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const customEvent = e as CustomEvent<Page>;
      navigate(customEvent.detail);
    };

    window.addEventListener('navigate', handleNavClick);
    return () => window.removeEventListener('navigate', handleNavClick);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'leistungen':
        return <Leistungen />;
      case 'unternehmen':
        return <Unternehmen />;
      case 'landeigentuemer':
        return <Landeigentuemer />;
      case 'flaechenpruefung':
        return <Flaechenpruefung />;
      case 'referenzen':
        return <Referenzen />;
      case 'kontakt':
        return <Kontakt />;
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
