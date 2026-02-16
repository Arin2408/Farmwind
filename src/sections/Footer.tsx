type Page = 'home' | 'leistungen' | 'unternehmen' | 'landeigentuemer' | 'flaechenpruefung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const navLinks: { name: string; page: Page }[] = [
  { name: 'Leistungen', page: 'leistungen' },
  { name: 'Unternehmen', page: 'unternehmen' },
  { name: 'Landeigentümer', page: 'landeigentuemer' },
  { name: 'Flächenprüfung', page: 'flaechenpruefung' },
  { name: 'Referenzen', page: 'referenzen' },
  { name: 'Kontakt', page: 'kontakt' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3A6B54] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
          >
            <img
              src="/assets/farmwindlogo.svg"
              alt="farmWIND"
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className="text-white/90 hover:text-white text-base font-medium transition-all duration-300 relative group text-left"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 farmWIND GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavClick('impressum')}
              className="text-white/70 hover:text-white text-sm underline underline-offset-2 transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={() => handleNavClick('datenschutz')}
              className="text-white/70 hover:text-white text-sm underline underline-offset-2 transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
