import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'leistungen' | 'unternehmen' | 'landeigentuemer' | 'flaechenpruefung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const navLinks: { name: string; page: Page }[] = [
  { name: 'Leistungen', page: 'leistungen' },
  { name: 'Unternehmen', page: 'unternehmen' },
  { name: 'Landeigentümer', page: 'landeigentuemer' },
  { name: 'Flächenprüfung', page: 'flaechenpruefung' },
  { name: 'Referenzen', page: 'referenzen' },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const isActive = (page: Page) => currentPage === page;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 custom-expo ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group animate-slide-down"
            style={{ animationDelay: '0s' }}
          >
            <img
              src="/assets/farmwindlogo.svg"
              alt="farmWIND"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`relative text-[15px] font-medium transition-all duration-300 animate-fade-in-up ${isActive(link.page)
                  ? 'text-[#3A6B54]'
                  : 'text-gray-700 hover:text-[#3A6B54]'
                  }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#3A6B54] transition-all duration-300 ${isActive(link.page) ? 'w-full' : 'w-0'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick('kontakt')}
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 bg-[#3A6B54] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#2D5542] hover:shadow-lg hover:shadow-[#3A6B54]/20 hover:-translate-y-0.5 animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            Kontakt
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#3A6B54]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 custom-expo ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-base font-medium transition-colors text-left ${isActive(link.page)
                  ? 'text-[#3A6B54]'
                  : 'text-gray-700 hover:text-[#3A6B54]'
                  }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('kontakt')}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#3A6B54] text-white text-sm font-medium rounded-full mt-2"
            >
              Kontakt
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
