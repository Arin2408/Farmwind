import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

type Page = 'home' | 'leistungen' | 'unternehmen' | 'landeigentuemer' | 'flaechenpruefung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz';



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (heroRef.current) {
          const scrollY = window.scrollY;
          const heroHeight = heroRef.current.offsetHeight;
          const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.5));
          const translateY = scrollY * 0.3;
          heroRef.current.style.opacity = String(opacity);
          heroRef.current.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNavClick = (page: Page) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[50vh] lg:min-h-screen flex items-center pt-20 lg:pt-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto w-full">
          <div ref={heroRef} className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#3A6B54] leading-tight">
              <span
                className="block overflow-hidden"
              >
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  farmWIND:
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Ihr Partner für nachhaltige
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Photovoltaik- und
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  Windkraftlösungen
                </span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Full-Width Wind Turbine Image */}
      <section className="w-full overflow-hidden" ref={imageRef}>
        <div className="relative w-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <img
            src="/assets/wind-turbines.jpg"
            alt="Wind turbines in green fields"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#3A6B54] leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            Entdecken Sie unsere Vielfalt an Dienstleistungen: Ihr Wegweiser durch farmWIND
          </h2>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-12 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Map Card - Spans 3 columns */}
            <div
              className="lg:col-span-3 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:shadow-[#3A6B54]/10 transition-all duration-500 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: '0.1s' }}
              onClick={() => handleNavClick('referenzen')}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/map.jpg"
                  alt="Map of Germany showing Schleswig-Holstein"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Unternehmen Card - Spans 2 columns */}
            <button
              onClick={() => handleNavClick('unternehmen')}
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-[#3A6B54]/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up text-left"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-sm text-gray-500 font-medium mb-4 block">Unternehmen</span>
              <h3 className="text-2xl lg:text-3xl font-medium text-[#3A6B54] leading-tight mb-8">
                Erfahren Sie mehr über farmWIND: Ihre Partner für eine nachhaltige Zukunft
              </h3>
              <span className="inline-flex items-center gap-2 text-[#3A6B54] font-medium group-hover:gap-3 transition-all duration-300">
                Mehr erfahren
                <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Leistungen Card - Spans 3 columns */}
            <button
              onClick={() => handleNavClick('leistungen')}
              className="lg:col-span-3 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-[#3A6B54]/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up text-left"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-sm text-gray-500 font-medium mb-4 block">Leistungen</span>
              <h3 className="text-2xl lg:text-3xl font-medium text-[#3A6B54] leading-tight mb-8 max-w-xl">
                Von der Planung bis zur Realisierung: Unsere Leistungen im Überblick
              </h3>
              <span className="inline-flex items-center gap-2 text-[#3A6B54] font-medium group-hover:gap-3 transition-all duration-300">
                Mehr erfahren
                <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Kontakt Card - Spans 2 columns */}
            <button
              onClick={() => handleNavClick('kontakt')}
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 hover:shadow-xl hover:shadow-[#3A6B54]/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up text-left"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-sm text-gray-500 font-medium mb-4 block">Kontakt</span>
              <h3 className="text-2xl lg:text-3xl font-medium text-[#3A6B54] leading-tight mb-8">
                Fragen? Wir haben antworten!
              </h3>
              <span className="inline-flex items-center gap-2 text-[#3A6B54] font-medium group-hover:gap-3 transition-all duration-300">
                Schreiben Sie uns
                <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
