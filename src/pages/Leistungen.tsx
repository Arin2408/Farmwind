import { useEffect, useRef } from 'react';

type Page = 'home' | 'leistungen' | 'unternehmen' | 'landeigentuemer' | 'flaechenpruefung' | 'referenzen' | 'kontakt' | 'impressum' | 'datenschutz';



const planungServices = [
  'Standortanalyse und Vorplanung',
  'Einstrahlungsanalyse (PV)',
  'Windertragsmessung (Wind)',
  'Wirtschaftlichkeitsberechnung',
  'Standortsicherung',
  'Entwurfsplanung',
  'Planung von Netzanschlusstrassen und Zuwegungen',
  'Projektankauf',
  'Ankauf Bestandswindparks',
  'Repowering',
  'Bürgerbeteiligungsmodelle',
  'Kommunale Beteiligungslösungen',
];

const umsetzungServices = [
  'Einholen der erforderlichen Genehmigungen',
  'Strukturierung der Ausschreibungsverfahren',
  'Finanzierung',
  'Wahl der standortspezifischen Anlagentechnik (Windenergieanlagen, Module)',
  'Wege- und Fundamentbau',
  'Koordination der Netzanbindung',
  'Abnahme und Inbetriebnahmeprozesse',
  'Einhaltung und Umsetzung von Genehmigungs- bzw. BImSchG-Auflagen',
  'Ausgleichsmaßnahmen',
];

export default function Leistungen() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (page: Page) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image and Gradient Overlay */}
      <section className="relative w-full pt-20 lg:pt-32">
        <div className="relative min-h-[50vh] lg:min-h-[600px] overflow-hidden flex items-center">
          {/* Background Image */}
          <img
            src="/assets/hero-leistungen.jpg"
            alt="Wind turbines"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Green Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(58, 107, 84, 0.85) 0%, rgba(58, 107, 84, 0.6) 40%, transparent 70%)'
            }}
          />
          {/* Hero Text */}
          <div className="relative z-10 w-full py-12 lg:py-0">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-xl animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
                  farmWIND – Ihr Partner
                  von der Idee
                  bis zur
                  Umsetzung
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Two Column Layout */}
      <section className="py-16 lg:py-24 px-6 lg:px-12" ref={sectionRef}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Planung Card */}
            <div
              className="service-card border border-[#3A6B54] rounded-lg p-8 lg:p-12 opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <h2 className="text-3xl lg:text-4xl font-medium text-[#3A6B54] mb-8">
                Planung
              </h2>
              <ul className="space-y-3">
                {planungServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-base lg:text-lg leading-relaxed"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Umsetzung & Bau Card */}
            <div
              className="service-card border border-[#3A6B54] rounded-lg p-8 lg:p-12 opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <h2 className="text-3xl lg:text-4xl font-medium text-[#3A6B54] mb-8">
                Umsetzung & Bau
              </h2>
              <ul className="space-y-3">
                {umsetzungServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-base lg:text-lg leading-relaxed"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#3A6B54] leading-tight mb-8 max-w-3xl mx-auto">
            Starten Sie Ihr Energieprojekt heute: Kontaktieren Sie uns für eine persönliche Beratung
          </h2>
          <button
            onClick={() => handleNavClick('kontakt')}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#3A6B54] text-[#3A6B54] font-medium rounded-full transition-all duration-300 hover:bg-[#3A6B54] hover:text-white"
          >
            Jetzt mit uns sprechen!
          </button>
        </div>
      </section>
    </div>
  );
}
